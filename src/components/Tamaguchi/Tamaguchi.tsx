import React from 'react'
import './Tamaguchi.scss'
const Tamaguchi = () => {
    return (
        <div>
          <div class="tamagotchi">
            <div class="loop"></div>
            
            <div class="tamagotchi__inner">
                <div class="tamagotchi__shadow">
                <div class="tamagotchi__highlight"></div>
                </div>
            
                <div class="screen">
                <div class="crack crack--top"></div>
                <div class="crack crack--right">
                    <div class="crack__line"></div>
                </div>
                <div class="crack crack--bottom"></div>
                <div class="crack crack--left">
                    <div class="crack__line"></div>
                </div>

                <div class="screen__inner">
                    <div class="Margo"></div>
                    <div class="poop"></div>
                </div>
                </div>

                <div class="buttons">
                <div class="button button--a">
                </div>
                <div class="button button--b">
                </div>
                <div class="button button--c">
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Tamaguchi
