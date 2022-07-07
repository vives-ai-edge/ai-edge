# Usergroup meeting 3 AI@EDGE

Date: 29 June 2021 <br/>
Location: Online - Teams

* Present:
  * Kris Bellemans (E.D.&A.)
  * Nicolas Maes (Picanol)
  * Peter Papics (Transport & Mobility Leuven)
  * Luc Buydens (Melexis)
  * Frank Allemeersch (Sensotec)
  * Chandu Kancharla (KU Leuven - Brugge)
* Excused:
  * Fabrice Verhaert (6Wolves)
  * Gert Van de Wouwer (Digipolis)
  * Dieter Therssen (DSP Valley)
  * Patrick Smout (E.D.&A.)
  * Patrick Puissant (Picanol)
  * Kris Vanherle (Transport & Mobility Leuven)
  * Ben Minnaert (Odisee)
  * Nick Destrycker (Edgise)
  * Willem Romanus (6Wolves)
  * Edouard Charvet (Scioteq)
  * Anke Van Campen (VLAIO - project advisor)
* Project team members:
  * Toon Goedemé (KU Leuven - De Nayer)
  * Kristof Van Beeck (KU Leuven - De Nayer)
  * Maarten Vandersteegen (KU Leuven - De Nayer)
  * Lotte Hendrickx (KU Leuven - De Nayer)
  * Piet Cordemans (VIVES)
  * Sille Van Landschoot (VIVES)
  * Jonas Lannoo (VIVES)

## Presentation Slides

Preview: <br/>
@[pdf](https://ai-edge.be/UG3.pdf)

Open the presentation in a new page: <br/>
[User group meeting slides](https://ai-edge.be/UG3.pdf)

## Frameworks

* Comments:
  * Luc Buydens (Melexis):  How long does it take to port a network to embedded hardware? It depends, ranging from a few hours to weeks. Does the framework include all required layers? What’s the knowledge of the engineer? Do we need to create specific functions ourselves?
  * Chandu (KU Leuven): Did you start with a pre-trained network? What if the network changes?
  * Chandu (KU Leuven): What’s the impact on the accuracy when quantizing the network?
  * Chandu (KU Leuven): Were the frameworks chosen specific for this application for speed or possibility for optimization?

## Edge Impulse

* Comments:
  * General: Can we import all networks in Edge Impulse?

## Academic use-case

* Comments:
  * Piet Cordemans (VIVES): If you increase the number of neurons, possibly overfitting might occur. Your graphs do not show this. Should this be investigated?
    * Current network does not reach the overfitting point.
  * Maarten Vandersteegen (KU Leuven): You used a single hidden layer. Did you try multiple layers?
    * Yes, but they did not yield better results.
    * User more layers might also be able to reach the overfitting point.
  * Chandu (KU Leuven): Are there consistent misclassifications? Is there a trend in the errors?
    * The speed of writing, moving the pen before/after writing, ...
  * Chandu (KU Leuven): Was there a particular orientation when holding the pen?
    * Microcontroller up, but position was changed during measurement. Extra testing necessary to see the effect.
  * Toon Goedemé (KU Leuven): When going from 32-bit to 8-bit (factor 4) weight quantization, the memory and flash usage decreases with factor 3.
    * Ok, same magnitude of decrement.
  * Maarten Vandersteegen (KU Leuven): Does the flash usage only includes the model?
  * Piet Cordemans (VIVES): Does this latency take into account the pre-processing time?
    * No.
  * Toon Goedemé (KU Leuven): Why split up A and B in left and right handed. Why not go for a single class?
    * Both are valid options. When starting the project I started this way, I could combine but have chosen for the 5 classes instead of 3. Easy option to combine the classes.
  * Luc Buydens (Melexis): You only need the lower frequencies. To make calculation complexity lower, why don't you cut off the higher frequencies?
    * No options in the framework. Solution: there’s a whole documentation on how to customize and implement your own functions.
    * 1D convolution performed better than 2D, since there is more information.
  * Luc Buydens (Melexis): What information of the spectrogram does the convolution use?
    * 1D convolution on the 2D data will apply the filter over a single axis, after investigating only over the time axis.
    * 2d convolution performs it on both axes simultaneously.

## E.D.&A. use-case

* Comments:
  * No specific remarks from the user group.

## TML use-case

* Comments:
  * Peter Papics (TML): In the meantime we have collected a lot more video material (for other development purposes). We would be very happy to share those, so you could have more data to improve the accuracy.
    * Currently the generalization is not that good. For real-life applications 
  * Toon Goedemé (KU Leuven): Is the data annotated?
    * Peter Papics (TML): We are working with partners to annotate, need to check this out.
  * Luc Buydens (Melexis): How do you handle the GDPR for this?
    * Peter Papics (TML) Have asked from the relevant commission: there is no issue because the images are not recorded. The telraam devices do not transmit any image data. All processing is happening on the devices themselves, you can not recognize people (face, number plates,...)
    * The videos for training are not shared and only used internally for development.


## Melexis use-case

* Comments:
  * No specific remarks from the user group.