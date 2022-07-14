---
sidebarDepth: 0
---

# Overview of the frameworks

Within this project several frameworks that allow the developer to create Deep Learning AI models, train them and deploy them on embedded devices were investigated. These frameworks can be split up in two main types. The high-level frameworks can be used by persons who don't have a lot of programming experience and want to figure out what solutions AI can give. The low-level frameworks are tools for experienced developers that have a good knowledge on AI and its capabilities. Programming skills is a must.

## High-level frameworks

These frameworks are for the less-experienced user. They provide all the information and documentation online and the tools to develop your own Deep Learning application. This development starts from data collection, to deploying the trained neural network on your embedded devices and running it.

### Edge Impulse

[Link to Edge Impulse](https://www.edgeimpulse.com/)

## Low-level frameworks

These frameworks

### Tensorflow

### Tensorflow Lite

### Tensorflow Lite for Microcontrollers

## Non-AI frameworks

During the project other frameworks were required to develop the academic and industrial use-cases. Such as framworks to create a program that is deployable on to an embedded device. These frameworks are shortly explained here and a link is given to their homepage.

### ESP-IDF

[Homepage of the ESP-IDF framework](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/#)

This framework is used to create and compile code for ESP-based systems such as the ESP-EYE. The framework is used as a plug-in for Visual Studio Code. It provides a self-sufficient SDK for any generic application development on these platforms, using programming languages such as C and C++.

This tool is used to program the ESP-EYE board, used in the hands-on workshop on embedded vision.

### Mbed OS

[Homepage of the ARM Mbed OS framework](https://os.mbed.com/)

Mbed is a framework from ARM that provides you with a free and open source IoT operating systems with networking and security built-in. Next to an operating systems it also provides the capability to work with a bare-metal profile for performance specific tasks. The Mbed framework is not only a set of libraries and guidelines, it also provides an own compiler and tools to develop your firmware. These tools are an online compiler, a development environment (IDE) and a CLI for more advanced work. The Mbed framework has a list of more than 150 supported development boards to deploy your code on. The advantage of this framework is that with minimal effort and changes you can deploy the same code on another target and compare the performance.

The Tensorflow libraries for C++ development were structured and styled along the rules of Google. In this way it is hard to implement this library in existing projects without refactoring a large part of your program. Therefore, we updated the Tensorflow library to a library that is supported by the Mbed framework. It supports the easy integration and update commands from Mbed and can be found [here](https://github.com/sillevl/tensorflow-lite-micro-mbed). An example program that uses this library in "hello world" for AI can be found [here](https://github.com/sillevl/tensorflow-lite-micro-hello-world-mbed). Tensorflow is developed in the Linux ecosystem, therefore it can be hard to use it in a Windows environment. We developed a docker container as a helper to generate projects. The container consists of a Tensorflow project, the Linux build tools and the mbed build tools. In this way, new projects can be create on a Windows machine. The link to the docker container helper can be found [here](https://github.com/sillevl/tensorflow-lite-micro-docker-mbed-helper).