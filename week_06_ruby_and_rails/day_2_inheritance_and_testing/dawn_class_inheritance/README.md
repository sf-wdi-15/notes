# Inheritance in Ruby

## Objectives

By the end of the lesson, you should be able to:

  * Implement inheritance
  * Describe what has been inherited from one class to another
  * Compare and contrast inheritance in Ruby with Prototypical inheritance in Javascript
  * Utilize inheritance to reduce repetition
  * Utilize inheritance to model the world
  * Separate files using `require`, `require_relative`, `load`

## So what's Inheritance, and why do we use it?

Inheritance is used when one class will get some, most, or all of its methods and properties from a parent class. And if we think about the world in this context, we'll begin to realize that more often than not, one class of objects often inherits its features from a larger, parent class of objects.

### A overly simplistic example:

__A motor vehicle (motor_vehicle) intended for roads:__

Properties | Methods
---- | ----
Has some number of wheels | Is capable of accelerating
Has a length, width, and height | Is capable of braking (or stopping)
Has a mass (weight)

__A sportscar__ < Extends "motor_vehicle"

Includes all the properties and methods of "motor_vehicle", plus:

Properties | Methods
---- | ----
May be a convertible | Open convertible top
May have 2, or 4 doors | Automatic door unlock/lock
Engine type (gas, diesel, electric, etc) | 

__A tractor trailer__ < Extends "motor_vehicle"

Includes all the properties and methods of "motor_vehicle", plus:

Properties | Methods
---- | ----
Cargo capacity (volume) | Slide up cargo door
Cargo capacity (weight) | Attach to trailer
Number of axles | Use CB Radio
Engine type (gas/diesel) | Beep when backing up


