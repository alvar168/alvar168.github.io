---
layout: page
title: Modular Soft Haptic Displays with Fluidic Logic and Personalization
description: Reconfigurable soft haptic interfaces with personalized signal design
img: assets/img/modular_haptics_overview.png
importance: 1
category: research
related_publications: true
---

This project presents a modular soft haptic display designed to support personalized and task-specific information transfer in human–machine interaction. The system combines reconfigurable pneumatic hardware with an information-theoretic framework to tailor feedback signals, such as pressure, frequency, and contact area, to individual users and tasks.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/modular_haptics_overview.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Overview of the modular haptic system combining hardware reconfiguration and algorithmic personalization.
</div>

At the hardware level, the interface consists of multi-degree-of-freedom soft haptic displays controlled through fluidic logic circuits. These circuits enable different actuation patterns to be generated and reconfigured directly in the pneumatic hardware, reducing reliance on complex electropneumatic control. By modifying the logic connections, the same device can produce qualitatively different tactile signals, allowing rapid adaptation without rewriting control software.

At the system level, an information-theoretic personalization algorithm selects the most effective signal configuration for a given user and task. User studies demonstrate that this combination of mechanical reconfiguration and algorithmic selection improves task performance and perceived usefulness of haptic feedback. This work highlights the importance of integrating hardware modularity and algorithmic personalization in the design of adaptable soft robotic interfaces.

### Fluidic Logic Control

A key component of this system is the fluidic logic control architecture, which enables different haptic signal modalities to be generated directly in the pneumatic hardware. Using soft bistable valves arranged into logic circuits, the system can route and transform simple pressure inputs into distinct tactile outputs such as steady pressure, oscillations, and expanding contact area.

This approach reduces reliance on complex electropneumatic control hardware and supports rapid reconfiguration of the display. Rather than rewriting control software for each new signal type, users can modify the pneumatic logic connections to change how the same modular display renders information.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/fluidic_logic_impl.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/fluidic_logic_diagram.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: hardware implementation of the fluidic logic-controlled haptic system. Right: schematic of the code logic and output logic used to generate pressure, frequency, and area-based signals.
</div>

Beyond the hardware, the system also incorporates an information-theoretic personalization framework that selects the most effective display configuration for a given user and task. User studies showed that combining mechanical reconfiguration with algorithmic selection improved task performance and made the feedback feel more useful, highlighting the value of integrating hardware modularity with human-centered optimization.

### Project Video

{% raw %}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 1em;">
  <iframe 
    src="https://www.youtube.com/embed/mPuronGAdFQ" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top:0; left:0; width:100%; height:100%;">
  </iframe>
</div>
{% endraw %}

### Fluidic Logic Demonstration
This video highlights the fluidic logic control architecture, including code logic and output logic, and demonstrates how different haptic signal modalities are generated and reconfigured.
{% raw %}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 1em;">
  <iframe 
    src="https://www.youtube.com/embed/QE505OMseeA" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top:0; left:0; width:100%; height:100%;">
  </iframe>
</div>
{% endraw %}