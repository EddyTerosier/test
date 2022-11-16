import React from 'react'
import Header from '../main/Header' 

export default function Section1() {
  return (
    <div class="banniere">
        <Header/>
        <main>
            <div>
                <h1>Découvrez notre univers
                    <br/>
                        DREAM-<strong>GYM</strong>
                </h1>
            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/Z_hl0Aq4yPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </main>
    </div>
  )
}
