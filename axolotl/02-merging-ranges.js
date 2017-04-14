/* Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with properties startTime and endTime . These integers represent the number of 30-minute blocks past 9:00am.

For example:

    {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
    {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

For example, given:

    [
        {startTime: 0,  endTime: 1},
        {startTime: 3,  endTime: 5},
        {startTime: 4,  endTime: 8},
        {startTime: 10, endTime: 12},
        {startTime: 9,  endTime: 10},
    ]

your function would return:

    [
        {startTime: 0, endTime: 1},
        {startTime: 3, endTime: 8},
        {startTime: 9, endTime: 12},
    ]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound. */

// need to compare if the endTime is the same or after the startTime of the second one
// what happens if the second meeting ends before the first meeting ends?

/*
1. We treat the meeting with earlier start time as "first," and the other as "second."
2. If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times.
3. Else, we leave them separate. */

console.log(mergeRanges([{startTime: 3, endTime: 5}, {startTime: 2, endTime: 4}]));

function sortedMeetings(meetings) {
    return meetings.slice().sort(function compare(a, b) {
        if (a.startTime < b.startTime) {
            return -1;
        }
        if (a.startTime > b.startTime) {
            return 1;
        }
        return 0;
    });
};

function mergeRanges(meetings) {

    var sorted = sortedMeetings(meetings);

    var mergedMeetings = [sorted[0]];

    for (var i = 1; i < sorted.length; i++) {
        var current = sorted[i];
        var last = mergedMeetings[mergedMeetings.length - 1];

        if (last.endTime >= current.startTime) {
            mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(current.endTime, last.endTime);
        } else {
            mergedMeetings.push(current);
        }
    }

    return mergedMeetings;
}
