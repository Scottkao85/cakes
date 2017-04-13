const test = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

// need to sort the meetings so things run in order
let sortMeetings = (meetings) => {
  return meetings.sort((a, b) => {
    if (a.startTime > b.startTime) {
      return 1;
    } else if (a.startTime < b.startTime) {
      return -1;
    } else {
      return 0;
    }
  })
}

let mergeRanges = (meetings) => {
  let merged = [];
  let sortedMeetings = sortMeetings(meetings);

  // push the first of meetings into merged that way we don't have to do any checks
  merged.push(sortedMeetings[0]);

  for (let i = 1; i < sortedMeetings.length; i++) { // start at the second item
    if (sortedMeetings[i].startTime > merged[merged.length-1].endTime) { //if the first meeting startTime is greater than the last meeting endtime
      merged.push(sortedMeetings[i]); // push the current meeting in
    } else { // otherwise it's less and you'll need to merge them
      merged[merged.length-1].endTime = sortedMeetings[i].endTime; //take the last meeting's endTime and add in the current endTime
    }
  }

  return merged;
}

mergeRanges(test);
