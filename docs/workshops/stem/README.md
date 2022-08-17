# STEM Workshop

![STEM session](./assets/workshop%20stem.png)

## Description
The STEM sessions are organised for secundary school students. During this workshop the low-level car detection and AI optimalisation process is peformed by the students, but in a tangible and approachable way. Instead of a microcontroller with embedded camera, a Raspberry Pi SBC and USB camera is used. Using the Edge Impulse framework it is shown that the size and content of a dataset is very important to detect objects. In this case it is expected to detect a car or no car with the camera. The students start with an existing CIFAR10 dataset and add new images to it. These images are pictures of toy cars and other objects, they are respectively annotated with "car" and "other". Every object is captured from different angles, lighting settings and backgrounds to create a dataset of more than 210 images (excluding the CIFAR10 dataset). Next, a MobileNetV2 model is trained and the result is evaluated using Edge Impulse. Finally, the working model is infered to the Raspberry Pi and tested with a real 3D-printed garage door that is driven by a small servo motor. An example can be found [here](https://www.youtube.com/watch?v=xqjAkvjIidE). During the workshop the studens lear a lot of lessons, such as the fundamentals of Deep Learning, the necessity of a labled dataset that is representative an large enough, the evaluation of the classifier, interpretation of a confusion matrix, the optimalisation of the network by changing the number of epochs, image resultion, model size and other (hyper)parameters. Also overfitting is made tangible.

## Want to join?

The workshop is regularly organised by KU Leuven Eavise. Keep an eye on their [calender](https://iiw.kuleuven.be/onderzoek/eavise) to find out if a new workshop is coming up!

A workshop can also be booked for a specific group, please contact us for further information: <br/>
**Prof. Toon Goedemé** <br/>
<toon.goedeme@kuleuven.be> <br/>
**dr. ing. Kristof Van Beeck** <br/>
<kristof.vanbeeck@kuleuven.be>

