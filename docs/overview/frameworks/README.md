---
sidebarDepth: 0
---

# Overview of the frameworks

Within this project several frameworks that allow the developer to create Deep Learning AI models, train them and deploy them on embedded devices were investigated. These frameworks can be split up in two main types. The high-level frameworks can be used by persons who don't have a lot of programming experience and want to figure out what solutions AI can give. The low-level frameworks are tools for experienced developers that have a good knowledge on AI and its capabilities. Programming skills is a must.

## High-level frameworks

These frameworks are for the less-experienced user. They provide all the information and documentation online and the tools to develop your own Deep Learning application. This development starts from data collection, to deploying the trained neural network on your embedded devices and running it.

### Edge Impulse

[Homepage Edge Impulse](https://www.edgeimpulse.com/)



Several use-cases and workshops have used this framework during the development phase.

### NanoEdge AI Studio

[Homepage of NanoEdge AI Studio](https://www.st.com/en/development-tools/nanoedgeaistudio.html)

NanoEdge AI studio is a desktop tool for the design and generation of STM32-optimized libraries that support different types of applications. Those are limited to anomaly and outlier detection, feature classification, and extrapolation of temporal and multivariable signals. Anomaly detection libraries are designed using very small datasets, therefore we need to learn the normality directly on the STM32 microcontroller and detect defects in real time. Another application is a one-class classification libraries for outlier detection, designed with a very small dataset, to apply for data acquisition during normal equipment operation and detection of any abnormal pattern deviation. One can classify signals in real time using their N-class classification library designed with very small, labeled datasets. Finally, the prediction of future values based on data patterns never seen before can be done using the extrapolation with small, fragmented dataset by means of regression libraries.
The tool supports any type of sensor as input: vibration, magnetometer, current, voltage, multi-axis accelerometer, temperature, acoustic and more. You can explore millions of possible algorithms to find the optimal library in terms of accuracy, confidence, inference time, and memory footprint. They also provide an embedded emulator to test library performance live with an attached STM32 board or from test data files. Of course there is native support for STM32 development boards, and there is no configuration required. Because of this support there is easy portability across the various STM32 microcontroller series.

Unfortunately this tool is not for free but a three months test period is possible.

## Low-level frameworks and compilers

These frameworks and compilers provide libraries and tools to develop neural networks and are mostly developed in a specific programming language such as Python, C++, JavaScript. They also provide you with the possibility to optimise your model so that a large model can be run on your embedded target.

### Tensorflow

[Homepage of Tensorflow](https://www.tensorflow.org/)



### Tensorflow Lite

[Homepage of Tensorflow Lite](https://www.tensorflow.org/lite)

TensorFlow Lite is a set of tools that enables on-device machine learning by helping developers run their models on mobile, embedded, and edge devices. It features optimisation tools for on-device machine learning by addressing five key constraints: 
* latency (there's no round-trip to a server),
* privacy (no personal data leaves the device),
* connectivity (internet connectivity is not required),
* size (reduced model and binary size)
* power consumption (efficient inference and a lack of network connections).
It does not only work on the microcontrollers used in this project, but also supports Android, iOS and embedded Linux devices. Therefore it can also be used with several programming languages such as Swift, Java, C++ and Python. Of wich we used the latter one (Python) the most during this project. It provides you hardware acceleration tools and model optimisation kernels to improve the model you created using Tensorflow.

### Tensorflow Lite for Microcontrollers

[Homepage of Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers)

TensorFlow Lite for Microcontrollers is designed to run machine learning models on microcontrollers and other devices with only few kilobytes of memory. The core runtime just fits in 16 KB on an Arm Cortex M3 and can run many basic models. It doesn't require operating system support, any standard C or C++ libraries, or dynamic memory allocation. TensorFlow Lite for Microcontrollers is written in C++ 11 and requires a 32-bit platform. It has been tested extensively with many processors based on the Arm Cortex-M Series architecture, and has been ported to other architectures including ESP32. The framework is available as an Arduino library. It can also generate projects for development environments such as Mbed. It is open source and can be included in any C++ 11 project. TensorFlow Lite for Microcontrollers is designed for the specific constraints of microcontroller development. If you are working on more powerful devices (for example, an embedded Linux device like the Raspberry Pi), the standard TensorFlow Lite framework might be easier to integrate.

The Tensorflow Lite for Microcontroller libraries are used in almost all cases handled in this project where the inference was done on an embedded device (with the exception of the Raspberry Pi).

### CMSIS-NN

[Homepage of CMSIS-NN](https://www.keil.com/pack/doc/CMSIS/NN/html/index.html)

CMSIS-NN is an open-source software library. It can be compared with the well-known [CMSIS-DSP library](https://www.keil.com/pack/doc/CMSIS/DSP/html/index.html) that provides kernels developed to efficiently calculate DSP operations on a microcontroller target. It is developed by Keil and provides a collection of efficient neural network kernels to maximize the performance and minimize the memory footprint of neural networks. This is specifically for ARM Cortex Mx processors. The library provides kernels for the following categories:
* Convolution Functions
* Activation Functions
* Fully-connected Layer Functions
* SVDF Layer Functions
* Pooling Functions
* Softmax Functions
* Basic math Functions
The optimalisation technique quantisation is already partially embedded in the provided kernels as it provides functions for specific data types such as int8 and int16. It also provides libraries for devices that support SIMD (Single Instruction/Multiple Data) instructions (such as ARM Cortex M0+).
This library also supports Tensorflow Lite for Microcontrollers functions.

### Pytorch

[Homepage of Pytorch]()

### Pytorch Glow

[Homepage of Pytorch Glow]()

### ONNX

[Homepage of ONNC]()

### ONNC

[Homepage of ONNC]()

### X-CUBE-AI (CubeMX from ST)

[Homepage of X-CUBE-AI]()

### Kendryte Stack

[Homepage of the Kendryte Stack]()

### DORY

[Homepage of DORY]()

## Non-AI frameworks and compilers

During the project other frameworks were required to develop the academic and industrial use-cases. Such as framworks to create a program that is deployable on to an embedded device. These frameworks are shortly explained here and a link is given to their homepage.

### ESP-IDF

[Homepage of the ESP-IDF framework](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/#)

This framework is used to create and compile code for ESP-based systems such as the ESP-EYE. The framework is used as a plug-in for Visual Studio Code. It provides a self-sufficient SDK for any generic application development on these platforms, using programming languages such as C and C++.

This tool is used to program the ESP-EYE board, used in the hands-on workshop on embedded vision.

### Mbed OS

[Homepage of the ARM Mbed OS framework](https://os.mbed.com/)

Mbed is a framework from ARM that provides you with a free and open source IoT operating systems with networking and security built-in. Next to an operating systems it also provides the capability to work with a bare-metal profile for performance specific tasks. The Mbed framework is not only a set of libraries and guidelines, it also provides an own compiler and tools to develop your firmware. These tools are an online compiler, a development environment (IDE) and a CLI for more advanced work. The Mbed framework has a list of more than 150 supported development boards to deploy your code on. The advantage of this framework is that with minimal effort and changes you can deploy the same code on another target and compare the performance.

The Tensorflow libraries for C++ development were structured and styled along the rules of Google. In this way it is hard to implement this library in existing projects without refactoring a large part of your program. Therefore, we updated the Tensorflow library to a library that is supported by the Mbed framework. It supports the easy integration and update commands from Mbed and can be found [here](https://github.com/sillevl/tensorflow-lite-micro-mbed). An example program that uses this library in "hello world" for AI can be found [here](https://github.com/sillevl/tensorflow-lite-micro-hello-world-mbed). Tensorflow is developed in the Linux ecosystem, therefore it can be hard to use it in a Windows environment. We developed a docker container as a helper to generate projects. The container consists of a Tensorflow project, the Linux build tools and the mbed build tools. In this way, new projects can be create on a Windows machine. The link to the docker container helper can be found [here](https://github.com/sillevl/tensorflow-lite-micro-docker-mbed-helper).