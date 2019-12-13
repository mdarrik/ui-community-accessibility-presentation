## Accessibility Myths
1. Myth: I don't have any disabled users
    - ~20% of the US population has a permanent disability and 12% have a severe disability <!--Keep it centered around disabled people-->
        - Design and implementation can negatively affect disabled users
            - Vestibular Issues: Nausea, headaches
            - Seizures
            - Physical strain/injury
            - Frustration/stress
2. Myth: Accessibility is hard 
    - This is kind of true, but JavaScript, Backend Development, design, and other things we already do are just as hard.
        - The major difference is experience + knowledge. 
    - Semantic, functional HTML is mostly accessible
        - "Enhancements" using CSS & JS can break/obscure accessible features 
        - starting with accessibility as a focus will always be easier than trying to add it on to the end of the project. 

- As a web developer, how do I make sure the UI is accessible.
    - Learning
        - Principles
            - POUR
                - As a human being I want to perceive, operate, and understand the information and
                functionality of a web page using the software, tools and in the environment that I
                use to interact with the rest of the web, now and in the future.
        - Adopt heuristics (rules of thumb/mental models)
            - If meaning is conveyed visually - can it also be determined programmatically
                - proximity
                - contrast
                - color
                - images
                - borders
                - font or text settings
            - Can all functionality be accessed via keyboard?
            - Will it work in any situation that it might be used?
                - device, browser, screen reader, zoomed in, etc.
            - First rule of aria is not to use aria except if you must
        - Most common problems
            - poor keyboard navigation
            - lack of visual focus
            - poor color contrast
            - keyboard traps
            - no labels (alt, input label, empty button or links)
        - Building your own custom widgets
    - Testing
        - Accessibility Insights for Web
            - no (or few) false positives
            - automated, assisted and manual tests
            - great docs and reference links
            - extensive
    - Remediating/Improving/Iterating
        - don't just add aria
        - fully