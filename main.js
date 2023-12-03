import { readFile } from './utils/file-reader.js'
import { printSumOfCalibrationValues } from "./tag-1/tag_1-1.js";
import { printRealSumOfCalibrationValues } from "./tag-1/tag_1-2.js"
import { printAmountOfPossibleGames } from "./tag-2/tag_2-1.js";
import { printSumOfPower } from "./tag-2/tag_2-2.js";
import { printSumOfAllPartNumbers } from "./tag-3/tag_3-1.js";
import { printSumOfAlGearRatios } from "./tag-3/tag_3-2.js";

// Tag 1
let fileName = './tag-1/aufgabe.txt'
readFile(fileName, printSumOfCalibrationValues)
readFile(fileName, printRealSumOfCalibrationValues)

// Tag 2
fileName = './tag-2/aufgabe.txt'
readFile(fileName, printAmountOfPossibleGames)
readFile(fileName, printSumOfPower)

// Tag 3
fileName = './tag-3/aufgabe.txt'
readFile(fileName, printSumOfAllPartNumbers)
readFile(fileName, printSumOfAlGearRatios)
