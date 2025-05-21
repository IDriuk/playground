// LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.
// https://leetcode.com/problems/lru-cache/
// connect: undefined


interface CacheEntry<K, V> {
    key: K;
    value: V;
}

class LRUCache<K, V> {
    private capacity: number;
    private cache: CacheEntry<K, V>[];

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = [];
    }

    get(key: K): V | number {
        const index = this.cache.findIndex(entry => entry.key === key);
        if (index >= 0) {
            const [entry] = this.cache.splice(index, 1);
            this.cache.push(entry);
            return entry.value;
        } else {
            return -1; // Consistent with traditional cache implementations
        }
    }

    put(key: K, value: V): void {
        const index = this.cache.findIndex(entry => entry.key === key);
        if (index > -1) {
            this.cache.splice(index, 1);
        } else if (this.cache.length >= this.capacity) {
            this.cache.shift();
        }
        
        this.cache.push({ key, value });
    }

    // For testing purposes
    getCacheState(): CacheEntry<K, V>[] {
        return [...this.cache];
    }
}

// Tests
describe('LRUCache', () => {
    it('should work as expected', () => {
        const cache = new LRUCache<string, number>(2);

        // Test putting and getting
        cache.put('a', 1);
        expect(cache.get('a')).toBe(1);

        // Test LRU eviction
        cache.put('b', 2);
        cache.put('c', 3); // This should evict 'a'
        expect(cache.get('a')).toBe(-1);
        expect(cache.get('b')).toBe(2);
        expect(cache.get('c')).toBe(3);

        // Test updating existing key
        cache.put('b', 4);
        expect(cache.get('b')).toBe(4);

        // Test LRU order after get
        cache.get('c');
        cache.put('d', 5); // This should evict 'b' because 'c' was recently accessed
        expect(cache.get('b')).toBe(-1);
        expect(cache.get('c')).toBe(3);
        expect(cache.get('d')).toBe(5);
    });

    it('should handle capacity 1', () => {
        const cache = new LRUCache<string, number>(1);
        
        cache.put('a', 1);
        expect(cache.get('a')).toBe(1);
        
        cache.put('b', 2);
        expect(cache.get('a')).toBe(-1);
        expect(cache.get('b')).toBe(2);
    });

});