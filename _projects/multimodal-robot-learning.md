---
layout: page
title: Communicating Robot Learning through Multimodal Feedback
description: Case study on state-of-the-art modalities for robots to convey learned behaviors to human teachers during interaction
img: assets/img/hri_case_study_thumbnail.png
importance: 2
category: research
related_publications: true
---

This project explores how robots can communicate what they have learned to human users during interaction. As robots become more adaptive and data-driven, their internal state becomes increasingly difficult for humans to interpret. This work investigates how communication interfaces can bridge the gap between what a robot has learned and what a human believes it has learned.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/hri_case_study_overview.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Closing the loop between robot learning and communication during human–robot interaction, integrating learning algorithms, multimodal interfaces, and human feedback.
</div>

We developed an integrated system where participants kinesthetically teach a robot arm while receiving real-time feedback through multimodal interfaces. The system combines learning algorithms that extract task-relevant information with visual and haptic feedback designed to convey the robot’s internal state. By closing the loop between learning and communication, the interface enables users to better understand and guide the robot during training.

User studies demonstrate that communicating robot learning improves teaching performance, increases user confidence, and supports more effective human–robot collaboration. This work highlights the importance of designing learning algorithms and communication interfaces together, rather than as separate components.


### Multimodal Communication Interfaces

The system leverages multiple feedback modalities—including visual and haptic signals—to convey different aspects of the robot’s learning. Multimodal feedback enables richer and more intuitive communication compared to single-modality interfaces, allowing users to interpret uncertainty, confidence, and task-relevant features more effectively.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/hri_case_study_interfaces.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Visual interfaces used in the case study. Left: GUI showing learned waypoints and robot confidence through color. Right: AR overlay of waypoints in the physical workspace, with confidence conveyed through haptic feedback.
</div>

### Project Overview

{% raw %}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 1em;">
  <iframe 
    src="https://cdnapisec.kaltura.com/p/2375811/sp/237581100/embedIframeJs/uiconf_id/41951101/partner_id/2375811?iframeembed=true&playerId=vt_video_1_nd818p5k_1776048599149&entry_id=1_nd818p5k&flashvars[streamerType]=auto"
    frameborder="0"
    allow="autoplay *; fullscreen *"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;">
  </iframe>
</div>
{% endraw %}

{% raw %}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/EXfQctqFzWs?si=T2_BkwWzzU1vVfd-" frameborder="0" allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;">
  </iframe>
</div>
{% endraw %}

