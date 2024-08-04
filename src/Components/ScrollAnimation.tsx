import React, { useEffect } from "react";

const ScrollAnimation: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller__inner`
        const scrollerInner =
          scroller.querySelector<HTMLElement>(".scroller__inner");
        if (!scrollerInner) return;

        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller__inner`
        scrollerContent.forEach((item) => {
          const element = item as HTMLElement;
          const duplicatedItem = element.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <div className="scroller" data-speed="slow" data-direction="right">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
          <li>Flask</li>
          <li>Figma</li>
          <li>Python</li>
          <li>UI/UX</li>
        </ul>
      </div>
      <div className="scroller" data-speed="slow">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
          <li>Flask</li>
          <li>Figma</li>
          <li>Python</li>
          <li>UI/UX</li>
        </ul>
      </div>
      <style>{`
        /* General Styles */
        :root {
          --clr-neutral-100: hsl(0, 0%, 100%);
          --clr-primary-100: hsl(205, 15%, 58%);
          --clr-primary-400: hsl(215, 25%, 27%);
          --clr-primary-800: hsl(217, 33%, 17%);
          --clr-primary-900: hsl(218, 33%, 9%);
        }

        // html {
        //   color-scheme: dark;
        // }

        // body {
        //   display: grid;
        //   min-block-size: 100vh;
        //   place-content: center;
        //   font-family: system-ui;
        //   font-size: 1.125rem;
        //   background-color: var(--clr-primary-800);
        // }

        .scroller {
        width:inherit;
        }

        .scroller__inner {
        // color:white;
          padding-block: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .scroller[data-animated="true"] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction="left"] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed="fast"] {
          --_animation-duration: 20s;
        }

        .scroller[data-speed="slow"] {
          --_animation-duration: 60s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }

        .tag-list {
          margin: 0;
          padding-inline: 0;
          list-style: none;
        }

        .tag-list li {
          padding: 1rem;
        //   background: var(--clr-primary-400);
        background:white;
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
        }

        .test {
          background: red !important;
        }
      `}</style>
    </div>
  );
};

export default ScrollAnimation;
