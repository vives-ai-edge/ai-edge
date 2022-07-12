![AI@EDGE](./media/ai-edge.png)

# AI@EDGE - VLAIO TETRA project

> applying Artificial Intelligence on Edge devices using Deep Learning with Embedded optimizations

## Context

Typically, a Deep Learning algorithm is trained on a powerful server with a big set of data. Then the trained network is loaded in an application which deals with real data. This step is called inference. However, inference does not have to be applied at the computer system which was used for training. Therefore, it is possible to apply deep learning on systems which are less powerful, more energy efficient, and less dependent on a network. This opens several opportunities. As the data stays local, the AI works autonomous. This is important for users who do not want that their machine is dependent on a connection with the Internet. Moreover, local processing is vital for applications which value privacy. Furthermore, inference enables systems with a limited bandwidth which might not be able to transmit all data, to benefit from deep learning. Additionally, time-critical systems do not allow for an application with a high latency, as in the time which is needed to send data to the server back and forth.

## Goal

The goal of this project is to study the feasibility of deep learning and added value of AI in applications for low-cost embedded systems, i.e. edge devices. More specifically, we are targeting small and cheap embedded platforms, such as microcontrollers (e.g. ARM CORTEX-M or AVR ATmega) and system processors (e.g. ARM CORTEX-A as used in the Raspberry Pi or similar).

We want to make an overview of libraries, such as Tensorflow Lite, µTensor, CMSIS-NN, X-Cube AI , Neurona, etc. and supported systems suitable for Deep Machine Learning, such as a smartphone, embedded systems, bare metal systems or a browser. We will also apply the latest optimization techniques to accelerate and compact Neural Networks, such as weight quantization, layer fusion, pruning and architecture changes. These techniques are necessary to obtain acceptable results on hardware with limited capabilities.  

This study will enable a company to map their application to non-functional requirements such as the available processing power and memory, the number of features in the AI application, energy consumption, latency, etc. Next, we will build a proof of concept based on a few case studies. Industrial-relevant case studies will test the embedded system with AI to the non-functional requirements and deduce a manual with best-practices. This manual and a basic application will provide the basis of a workshop in order to get employees familiar with this technology. 

## Results

During the exploration phase of this project different tools to develop Deep Learning algorithms were identified. It bacame quickly clear that Tensorflow is the most used tool in different frameworks. In this project we mainly used Tensorflow due to its ready-to-use function to optimise the algorithm or network for embedded devices. Tensorflow is also supported by different programming languages, we mainly focused an used the Python implementation of Tensorflow, although the same is achievable in JavaScript. Companies that what to apply Deep Learning don't always have skilled programmers or experience in-house to develop these kind of algorithms. Therefore, investigation was done to see if there exist high-level solutions or tools to get started with. Using Edge Impulse, an online framework to specifically apply AI on embedded systems, the total workflow to apply an AI-network on an embedded system can be performed. The tool starts with data capturing, data analysis, possible preprocessing, the building of a network, validation and optimalisation until the deployment of the model on a supported embedded system. This is all done without writing one single line of code! Apart from this there are other tools to apply Deep Learning on embedded systems (such as the solution from STM), but some of them are not freely available and thus less accessible for companies. Next to using the high level tools for academic use cases, other industrial use cases were developed using Python. The optimalisation techniques were heavily investigated and used in the workshops and use cases, such as the quantisation of model parameters, reducing the model size by pruning the model, and optimising the compiler specifically for the embedded system.

The three proof-of-concepts that were developed are: 1) detection of writing symbols using a pencil where a microcontroller with Inertial Measurement Unit (IMU) was mounted on, 2) detecting the occupancy of a room using moving sensors mounted to the chairs, and 3) automatic activation of a garage gate when detecting a car with a camera in front of the gate. These academic use cases evolved in three hands-on workshops. The first workshop is an introduction to Deep Learning and the Edge Impulse framework using the writing use case. In the second and third workshop the car-detection case is applied on different difficulty levels. On the one hand it was applied in an approachable manner as a STEM session using the Edge Impulse framework, on the other hand as a low-level hands-on session where the users have to complete the code in C++ and Python. Manuals were written for these workshop, and after the end of this project the workshops are still organised.

Five industrial use cases were developed during the running time of this project. The relevant use-cases were destilled from the proposals, interest and questiosn from the user group, so that there was any relevance for everyone. These use-cases have different applications such as vision-based with different types of camera's, sensor based using IMU's, touch sensors, Time of Flight (ToF) sensors. Out of these use cases a manual with best-practices is generated. The results from this project were also published in several ways, such as a bachelor-, master- and doctoral theses. Finally, the project was concluded with a final symposium for the broad public.

## Partners

[IoT-Incubator](https://iot-incubator.be) <br/>
**dr. ing. Jonas Lannoo & Piet Cordemans** <br/>
VIVES campus Brugge

[EAVISE](http://www.eavise.be) <br/>
**Prof. Toon Goedemé & dr. ing. Kristof Van Beeck** <br/>
KU Leuven campus De Nayer

![VIVES](./media/vives-smile.png)

![EAVISE](./media/eavise.png)

![KU Leuven](./media/kuleuven.png)

## User group

* 6WOLVES
* DPTechnics
* E.D.&A.
* Edgise
* Melexis Technologies
* Picanol
* Qmineral
* ScioTeq 
* Sensotec
* Transport & Mobility Leuven
* LarbitsSisters

## Meetings

* Past:
  * 03/03/2020: [Usergroup meeting 1: Kickoff](meetings/usergroup1)
  * 28/01/2021: [Usergroup meeting 2](meetings/usergroup2)
  * 29/06/2021: [Usergroup meeting 3](meetings/usergroup3)
  * 29/04/2022: [Usergroup meeting 4](meetings/usergroup4)
  * 21/06/2022: [Final Symposium](meetings/finalsymposium)

## Workshops

- Past:
  - 09 December 2021: Artificiële Intelligentie op een microcontroller? Hands-on workshop embedded AI (2x)
    - (Deprecated) [Registration page](https://www.vives.be/nl/over-vives/kalender/artificiele-intelligentie-op-een-microcontroller-hands-workshop-embedded-ai)
    - [Course material](https://ai-edge-workshop.netlify.app/)
  - 18 May 2022: Hands-on workshop embedded AI with Edge Impulse
    - Separately organised for KU Leuven students
  - 29 March 2022: STEM workshop embedded vision with Edge Impulse
  - 02 April 2022: STEM workshop embedded vision with Edge Impulse (2x)
  - 03 June 2022: STEM workshop embedded vision with Edge Impulse
  - 22 April 2022: Hands-on workshop "Embedded Computer Vision Optimization"
    - (Deprecated) [Registration page](https://iiw.kuleuven.be/onderzoek/eavise/workshop_embedded_cv)
- Upcoming:
  - **14-16 September 2022: Post Universitary Centrum Summerschool - Embedded AI for Industry**
    - [Register here!](https://puc.kuleuven.be/nl/opleiding/embedded_ai_for_industry-xdojwgdenwla3bpz)
