import { readFile } from './utils/file-reader.js'
import { printSumOfCalibrationValues } from "./tag-1/tag_1-1.js";
import { printRealSumOfCalibrationValues } from "./tag-1/tag_1-2.js"

// Tag 1
const fileName = './tag-1/aufgabe.txt'
readFile(fileName, printSumOfCalibrationValues)
readFile(fileName, printRealSumOfCalibrationValues)
