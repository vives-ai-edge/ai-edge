![AI@EDGE](./media/ai-edge.png)

# AI@EDGE - VLAIO TETRA project

> applying Artificial Intelligence on Edge devices using Deep Learning with Embedded optimizations

## Context

Typically, a Deep Learning algorithm is trained on a powerful server with a big set of data. Then the trained network is loaded in an application which deals with real data. This step is called inference. However, inference does not have to be applied at the computer system which was used for training. Therefore, it is possible to apply deep learning on systems which are less powerful, more energy efficient, and less dependent on a network. This opens several opportunities. As the data stays local, the AI works autonomous. This is important for users who do not want that their machine is dependent on a connection with the Internet. Moreover, local processing is vital for applications which value privacy. Furthermore, inference enables systems with a limited bandwidth which might not be able to transmit all data, to benefit from deep learning. Additionally, time-critical systems do not allow for an application with a high latency, as in the time which is needed to send data to the server back and forth.

## Goal

The goal of this project is to study the feasibility of deep learning and added value of AI in applications for low-cost embedded systems, i.e. edge devices. More specifically, we are targeting small and cheap embedded platforms, such as microcontrollers (e.g. ARM CORTEX-M or AVR ATmega) and system processors (e.g. ARM CORTEX-A as used in the Raspberry Pi or similar).

We want to make an overview of libraries, such as Tensorflow Lite, µTensor, CMSIS-NN, X-Cube AI , Neurona, etc. and supported systems suitable for Deep Machine Learning, such as a smartphone, embedded systems, bare metal systems or a browser. We will also apply the latest optimization techniques to accelerate and compact Neural Networks, such as weight quantization, layer fusion, pruning and architecture changes. These techniques are necessary to obtain acceptable results on hardware with limited capabilities.  

This study will enable a company to map their application to non-functional requirements such as the available processing power and memory, the number of features in the AI application, energy consumption, latency, etc. Next, we will build a proof of concept based on a few case studies. Industrial-relevant case studies will test the embedded system with AI to the non-functional requirements and deduce a manual with best-practices. This manual and a basic application will provide the basis of a workshop in order to get employees familiar with this technology. 


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
    - [Course material](https://ai-edge-workshop.netlify.app/)
  - 18 May 2022: Hands-on workshop embedded AI with Edge Impulse
  - 29 March 2022: STEM workshop embedded vision with Edge Impulse
  - 02 April 2022: STEM workshop embedded vision with Edge Impulse (2x)
  - 03 June 2022: STEM workshop embedded vision with Edge Impulse
  - 22 April 2022: Hands-on workshop "Embedded Computer Vision Optimization"
- Upcoming:
  - **14-16 September 2022: Post Universitary Centrum Summerschool - Embedded AI for Industry**
    - [Register here!](https://puc.kuleuven.be/nl/opleiding/embedded_ai_for_industry-xdojwgdenwla3bpz)
