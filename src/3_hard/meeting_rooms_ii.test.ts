// Meeting Rooms II
// Given an array of meeting time intervals consisting of start and end times [[start1, end1], [start2, end2], ...],
//  determine the minimum number of conference rooms required to schedule all the meetings without any overlaps.
// You cannot assign more than one meeting to the same room at the same time.
// https://leetcode.com/problems/meeting-rooms-ii/
// connect: undefined

interface Interval {
    start: number;
    end: number;
}

function minMeetingRooms(intervals: Interval[]): number {
    if (intervals.length === 0) {
        return 0;
    }

    const start: number[] = new Array(intervals.length);
    const end: number[] = new Array(intervals.length);

    for (let i = 0; i < intervals.length; i++) {
        start[i] = intervals[i].start;
        end[i] = intervals[i].end;
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let startPointer = 0;
    let endPointer = 0;
    let usedRooms = 0;

    while (startPointer < intervals.length) {
        if (start[startPointer] >= end[endPointer]) {
            usedRooms -= 1;
            endPointer += 1;
        }

        usedRooms += 1;
        startPointer += 1;
    }

    return usedRooms;
}


describe('minMeetingRooms', () => {
    it('should return 0 when no meetings are scheduled', () => {
        const intervals: Interval[] = [];
        expect(minMeetingRooms(intervals)).toBe(0);
    });

    it('should return 1 when meetings do not overlap', () => {
        const intervals: Interval[] = [
            { start: 1, end: 2 },
            { start: 3, end: 4 },
        ];
        expect(minMeetingRooms(intervals)).toBe(1);
    });

    it('should return 2 when two meetings overlap', () => {
        const intervals: Interval[] = [
            { start: 1, end: 3 },
            { start: 2, end: 4 },
        ];
        expect(minMeetingRooms(intervals)).toBe(2);
    });

    it('should handle multiple overlapping meetings', () => {
        const intervals: Interval[] = [
            { start: 0, end: 30 },
            { start: 5, end: 10 },
            { start: 15, end: 20 },
        ];
        expect(minMeetingRooms(intervals)).toBe(2);
    });

    it('should handle back-to-back meetings', () => {
        const intervals: Interval[] = [
            { start: 1, end: 2 },
            { start: 2, end: 3 },
            { start: 3, end: 4 },
        ];
        expect(minMeetingRooms(intervals)).toBe(1);
    });

    it('should handle complex overlapping scenarios', () => {
        const intervals: Interval[] = [
            { start: 1, end: 10 },
            { start: 2, end: 7 },
            { start: 3, end: 5 },
            { start: 8, end: 12 },
            { start: 11, end: 15 },
        ];
        expect(minMeetingRooms(intervals)).toBe(3);
    });

    it('should handle meetings that start and end at the same time', () => {
        const intervals: Interval[] = [
            { start: 1, end: 5 },
            { start: 1, end: 5 },
            { start: 1, end: 5 },
        ];
        expect(minMeetingRooms(intervals)).toBe(3);
    });

    it('should handle large number of meetings', () => {
        const intervals: Interval[] = Array(1000).fill({ start: 1, end: 2 });
        expect(minMeetingRooms(intervals)).toBe(1000);
    });
});