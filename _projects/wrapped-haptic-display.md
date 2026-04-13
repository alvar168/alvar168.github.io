---
layout: page
title: Wrapped Haptic Display to Communicate Robot Learning
description: Soft haptic feedback integrated directly on robot arms for intuitive human–robot interaction
img: assets/img/pic01.png
importance: 2
category: research
related_publications: true
---

This project introduces a class of soft haptic displays that wrap directly around robot arms to communicate learning during physical human–robot interaction. The system enables a human teacher to both guide the robot and receive real-time feedback about the robot’s internal state through touch, without requiring additional screens or wearable devices.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pic01.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Wrapped haptic display providing real-time feedback during kinesthetic teaching. Inflation encodes regions of uncertainty, guiding human demonstrations.
</div>

The interface consists of pneumatically actuated soft displays that conform to the robot surface and render pressure-based signals. These signals encode the robot’s confidence during a task: regions of high uncertainty inflate to request additional guidance, while confident regions remain deflated. By placing feedback directly at the point of interaction, the system maintains the physical connection between the human and the robot while augmenting it with interpretable information.

User studies show that this localized haptic feedback improves both the speed and quality of kinesthetic teaching compared to traditional visual interfaces. Participants were able to distinguish pressure-based signals with high accuracy and used the feedback to provide more effective demonstrations. These results highlight the importance of co-locating feedback with interaction in human–robot systems.

### Soft Haptic Display Design

The wrapped display is constructed from flexible, heat-sealed pneumatic pouches arranged in a grid pattern. The design maintains low volume and fast response while producing textured surface deformation for improved tactile perception. Multiple configurations can be implemented, including single-degree-of-freedom sleeves and multi-degree-of-freedom ring displays distributed along the robot arm.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/haptic_displays.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Overview of the wrapped haptic display design, including sleeve and ring configurations for single- and multi-degree-of-freedom actuation.
</div>


### Project Video

{% raw %}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 1em;">
  <iframe 
    src="https://www.youtube.com/embed/yPcMGeqsjdM?si=XSoRNMINaR3CYqw5" 
    frameborder="0" 
    allowfullscreen
    style="position: absolute; top:0; left:0; width:100%; height:100%;">
  </iframe>
</div>
{% endraw %}
