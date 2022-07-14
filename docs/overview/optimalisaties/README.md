# Overview of the optimalisation techniques

During this project two specific optimalisation techniques were investigated. On the one hand quantisation, on the other hand pruning. Next to these two optimalisation techniques there are other ways to improve and accelerate your Deep Learning model when running it on an edge device. These methods are explained further.

## Quantisation

Quantisation is an optimalisation step where the weights and bias values of the neural network are converted to a more memory space efficient format. Mostly this conversion is between 32-bit floating point values to 8-bit integer values. This step can improve the memory usage by a factor of four at the most, because it uses four times less bits. It should also improve inference time because the operations used by the microcontroller are 8-bit based instead of 32-bit based. Because of this conversion, the model can perform worse after quantisation.

## Pruning



## Other optimalisation techniques

Next to quantisation and pruning there are othwer ways to optimise the running speed of the model. One could be by optimising the compiler settings, use a co-processor if the target has one or go to another type of device architecture.

### Compiler specific settings



### Availability of a co-processor



### Edge Device specific

