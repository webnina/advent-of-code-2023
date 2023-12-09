import { readFile } from './utils/file-reader.js'
import { printSumOfCalibrationValues } from "./tag-1/tag_1-1.js"
import { printRealSumOfCalibrationValues } from "./tag-1/tag_1-2.js"
import { printAmountOfPossibleGames } from "./tag-2/tag_2-1.js"
import { printSumOfPower } from "./tag-2/tag_2-2.js"
import { printSumOfAllPartNumbers } from "./tag-3/tag_3-1.js"
import { printSumOfAlGearRatios } from "./tag-3/tag_3-2.js"
import { printPointsInTotal } from "./tag-4/tag_4-1.js"
import { printAmountOfScratchcardCopies } from "./tag-4/tag_4-2.js"
import { printLowestLocation } from "./tag-5/tag_5-1.js"
import { printLowestLocationFromSeedRanges } from "./tag-5/tag_5-2.js"
import { printNumberOfWaysToBeatRecord } from "./tag-6/tag_6-1.js"
import { printNumberOfWaysToBeatRecordInBigGame } from "./tag-6/tag_6-2.js"
import { printTotalWinningOfCards } from "./tag-7/tag_7-1.js"

// Tag 1
let fileName = './tag-1/aufgabe.txt'
/*readFile(fileName, printSumOfCalibrationValues)
readFile(fileName, printRealSumOfCalibrationValues)

// Tag 2
fileName = './tag-2/aufgabe.txt'
readFile(fileName, printAmountOfPossibleGames)
readFile(fileName, printSumOfPower)

// Tag 3
fileName = './tag-3/aufgabe.txt'
readFile(fileName, printSumOfAllPartNumbers)
readFile(fileName, printSumOfAlGearRatios)

// Tag 4
fileName = './tag-4/aufgabe.txt'
readFile(fileName, printPointsInTotal)
readFile(fileName, printAmountOfScratchcardCopies)

// Tag 5
fileName = './tag-5/test-data.txt'
readFile(fileName, printLowestLocation)
readFile(fileName, printLowestLocationFromSeedRanges)

// Tag 6
fileName = './tag-6/aufgabe.txt'
readFile(fileName, printNumberOfWaysToBeatRecord)
readFile(fileName, printNumberOfWaysToBeatRecordInBigGame)*/

// Tag 7
fileName = './tag-7/aufgabe.txt'
readFile(fileName, printTotalWinningOfCards)
