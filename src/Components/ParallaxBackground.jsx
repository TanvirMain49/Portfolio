/* eslint-disable no-unused-vars */
import React from 'react'
import { images } from '../Constant/image'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

export default function ParallaxBackground() {

// Track scroll progress (0 to 1)
const { scrollYProgress } = useScroll();

// Smooth the scroll value using spring physics
const x = useSpring(scrollYProgress, { damping: 30 });

// Parallax movement for each layer based on scroll:
// - Far layers move more, near layers move less
// Farthest mountain layer (mountain3):
// - Moves vertically from 0% to 70% as you scroll from top (x = 0) to halfway down (x = 0.5)
// - This creates a strong parallax effect — farther objects move more
const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);

// Planets layer:
// - Moves horizontally from 0% to -20% (left) as you scroll
// - Creates a floating sideways effect (adds depth and motion)
// - The negative value moves it toward the left side of the screen
const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);

// Midground mountain layer (mountain2):
// - Moves vertically from 0% to 30% during the first half of scroll
// - Not as much movement as the farthest mountain, since it's closer
const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);

// Closest mountain layer (mountain1):
// - No vertical movement; stays at 0% the whole time
// - This makes it feel like it's the closest to the viewer (foreground)
// - Doesn't participate in parallax — it feels fixed
const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);


  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        {/* background sky */}
        <div className='absolute inset-0 w-full h-screen -z-50'
        style={{
          backgroundImage: `url(${images.stars})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover"
        }}
        />

        {/* Mountain layer 3 */}
        <motion.div className='absolute inset-0 -z-40'
        style={{
          backgroundImage: `url(${images.mountain3})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain3Y
        }}
        />

        {/* Planets */}
         <motion.div className='absolute inset-0 -z-30'
        style={{
          backgroundImage: `url(${images.planets})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          x: planetsX,
        }}
        />

        {/* Mountain layer 2 */}
         <motion.div className='absolute inset-0 -z-20'
        style={{
          backgroundImage: `url(${images.mountain2})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain2Y
        }}
        />

        {/* Mountain layer 1 */}
         <motion.div className='absolute inset-0 -z-10'
        style={{
          backgroundImage: `url(${images.mountain1})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain1Y,
        }}
        />

      </div>
    </section>
  )
}
