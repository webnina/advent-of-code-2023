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
import { printTotalWinningOfCardsWithJokers } from "./tag-7/tag_7-2.js"
import { printSumOfExtrapolatedValues } from "./tag-9/tag_9-1.js"
import { printPointFarthestFromStart } from "./tag-10/tag_10-1.js"
import { printSumOfExtrapolatedValuesBackwards } from "./tag-9/tag_9-2.js"
import { printStepsRequiredToZZZ } from "./tag-8/tag_8-1.js"
import { printStepsUntilAllEndsWithZ } from "./tag-8/tag_8-2.js"
import { printSumOfShortestPaths } from "./tag-11/tag_11-1.js"
import { printSumOfShortestPathsExtreme } from "./tag-11/tag_11-2.js"

run(1)

function run(day) {
    let fileName
    switch (day) {
        case 1:
            fileName = './tag-1/aufgabe.txt'
            readFile(fileName, printSumOfCalibrationValues)
            readFile(fileName, printRealSumOfCalibrationValues)
            break
        case 2:
            fileName = './tag-2/aufgabe.txt'
            readFile(fileName, printAmountOfPossibleGames)
            readFile(fileName, printSumOfPower)
            break
        case 3:
            fileName = './tag-3/aufgabe.txt'
            readFile(fileName, printSumOfAllPartNumbers)
            readFile(fileName, printSumOfAlGearRatios)
            break
        case 4:
            fileName = './tag-4/aufgabe.txt'
            readFile(fileName, printPointsInTotal)
            readFile(fileName, printAmountOfScratchcardCopies)
            break
        case 5:
            fileName = './tag-5/aufgabe.txt'
            readFile(fileName, printLowestLocation)
            readFile(fileName, printLowestLocationFromSeedRanges)
            break
        case 6:
            fileName = './tag-6/aufgabe.txt'
            readFile(fileName, printNumberOfWaysToBeatRecord)
            readFile(fileName, printNumberOfWaysToBeatRecordInBigGame)
            break
        case 7:
            fileName = './tag-7/aufgabe.txt'
            readFile(fileName, printTotalWinningOfCards)
            readFile(fileName, printTotalWinningOfCardsWithJokers)
            break
        case 8:
            fileName = './tag-8/aufgabe.txt'
            readFile(fileName, printStepsRequiredToZZZ)
            readFile(fileName, printStepsUntilAllEndsWithZ)
            break
        case 9:
            fileName = './tag-9/aufgabe.txt'
            readFile(fileName, printSumOfExtrapolatedValues)
            readFile(fileName, printSumOfExtrapolatedValuesBackwards)
            break
        case 10:
            fileName = './tag-10/aufgabe.txt'
            readFile(fileName, printPointFarthestFromStart)
            break
        case 11:
            fileName = './tag-11/aufgabe.txt'
            readFile(fileName, printSumOfShortestPaths)
            readFile(fileName, printSumOfShortestPathsExtreme)
            break
        default:
            console.log('nothing found for day', day)
    }
}
