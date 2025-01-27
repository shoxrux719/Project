import { CarouselApi } from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"
import React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
 
    CarouselContent,
    
  } from "@/components/ui/carousel"


const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        startIndex: Math.floor(children?.length / 2) || 0, // Устанавливаем начальный индекс
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    React.useEffect(() => {
      if (!api || !setApi) return

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return

      api.scrollTo(Math.floor(children?.length / 2) || 0, true) // Центрируем начальное положение
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect, children])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: () => api?.scrollPrev(),
          scrollNext: () => api?.scrollNext(),
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
