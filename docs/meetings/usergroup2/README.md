# Usergroup meeting 2 AI@EDGE

Date: 28 January 2021 <br/>
Location: Online - Teams

* Present:
  * Fabrice Verhaert (6Wolves)
  * Gert Van de Wouwer (Digipolis)
  * Dieter Therssen (DSP Valley)
  * Kris Bellemans (E.D.&A.)
  * Patrick Smout (E.D.&A.)
  * Chandu Kancharla (KU Leuven - Brugge)
  * Patrick Puissant (Picanol)
  * Nicolas Maes (Picanol)
  * Kris Vanherle (Transport & Mobility Leuven)
  * Peter Papics (Transport & Mobility Leuven)
  * Luc Buydens (Melexis)
  * Frank Allemeersch (Sensotec)
* Excused:
  * Ben Minnaert (Odisee)
  * Nick Destrycker (Edgise)
  * Willem Romanus (6Wolves)
  * Edouard Charvet (Scioteq)
  * Anke Van Campen (VLAIO - project advisor)
* Project team members:
  * Toon Goedemé (KU Leuven - De Nayer)
  * Kristof Van Beeck (KU Leuven - De Nayer)
  * Maarten Vandersteegen (KU Leuven De Nayer)
  * Piet Cordemans (VIVES)
  * Sille Van Landschoot (VIVES)
  * Jonas Lannoo (VIVES)

## Presentation Slides

Preview: <br/>
@[pdf](https://ai-edge.be/UG2.pdf)

Open the presentation in a new page: <br/>
[User group meeting slides](https://ai-edge.be/UG2.pdf)

## Introduction

In the introduction the hype cycle for AI in 2020 was shortly presented, it shows that the expectation of AI at the edge is at peak level, the plateau will be reached in 2 to 5 years. The goal and work packages of the project were shortly repeated and the planning for the following months was exploited.

* Comments:
  * Slide 7: Fabrice gave an update on 6WOLVES interaction. Kept themselves in the background. During COVID worked on wearables. Discussed organizing a meeting in the future.

## Use-cases by the usergroup

The use cases that were discussed during one-on-one meetings were shortly explained to the user group to create interaction and discussion to find out what use cases are most interesting for the user group. <br/>
A proposal of 4 industrial cases was given. Two additional use cases should be determined later in the project. The workshop project is an additional use case. 

* Comments:
  * Luc Buydens (Melexis): high volume market, cost is very important. For some applications power consumption is very important, for other applications it is only secondary.
  * Frank Allemeersch (Sensotec): accuracy and speed is of most importance for their use-case.
  * Patrick Smout (E.D.&A): platforms: they target Cortex M4. Mainly the response time should be quite fast. You need human response immediately, otherwise the user feeling is not that good. Apart from touch, the microprocessor also needs to perform other tasks, so the amount of processing power for the NN is limited even more. A delay of more than 0.1s is far too long and should be much shorter.
  * Peter Papics (TML): RPi based solution: size and power consumption already given, the RPi and camera already set the power consumption limits. Here, accuracy is of most importance. Given the HW and processing power limitations, the goal is to achieve maximal accuracy. Concerning the dataset: in the future much more data will be collected through a different project, which can be used to train a NN.

## Platforms

Different hardware platforms were shown to find out which platforms are most interesting for the user group. From low-end to high-end microcontrollers to chips with dedicated DSP cores used to accelerate inferences. The Raspberry Pi and its industrial variants are also a possibility, embedded GPUs like the Nvidia Jetson Nano are worth looking into and are used in use cases.
Three software platforms to do the learning of the network and infer a model from were shown. Some of them introduce already simple quantisation of the created model. The tools are “Tensorflow Lite”, “Edge Impulse” and “TFLite for microcontrollers on mbed”.
The mbed ecosystem was exploited.
A benchmark of a simple model (Hello World) on different hardware targets was performed. The example has one input (which lies between 0 and 2pi) and gives as output the value of the sine of that number. The inference time, clock cycles per inference was compared per target. Conclusions are that the ARM family has a significant impact on the inference time and that the inference time scales inversely proportional with the CPU clock speed.

* Comments:
  * No specific remarks from the user group. Caffe2 is deprecated, replaced by PyTorch.

## Current work

The current ongoing work comprises the thermal image sensor from Melexis, the traffic analysis from TML, a seat detection idea and the AB Writing use case. Details can be found in the slides at the end of this report.

* Comments:
  * Toon Goedemé (KU Leuven): question on the resolution for the RPi implementation.
  * Peter Papics (TML): highlights that the achieved results for object detection on the RPi seem promising (0.39s and 0.2s depending on RPi model). He indicates that a possible way to go would be to include a simple tracking methodology. This enables to measure direction and speed of objects of interest, while the CNNs only run at e.g. 5 FPS.

## Workshop

Planned goals of the workshop:
* Capture data (write capital letters A & B)
* Train network
* Quantise model
* Infer model on microcontroller (SensorTile from STM - STM32L476JGY)
* Attach hardware to pencil via 3D-printed cradle
* Connect device via Bluetooth
* Write letters and let infered model do its work (recognise handwritten letters A & B)

Planning: send out kits and do online hands-on workshop around June-August

* Comments:
  * No specific remarks from the user group.

## Networking

Make training of Melexis use-case possible in other locations. A prototype testing device has been developed which is ready to deploy at several remote locations to expand the training of the person-recognition model.
Give an early call to ED&A to make the existing data of their use-case available.
