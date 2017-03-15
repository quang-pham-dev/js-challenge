import { existsSync, mkdirSync, promises } from 'fs';
import { join } from 'path';

class Cache {
  constructor(directory = '.cache', maxAge = 3600000) {
    this.directory = directory;
    this.maxAge = maxAge;
    this.ensureCacheDirectory();
  }

  /**
   * Ensures the cache directory exists
   * @private
   */
  ensureCacheDirectory() {
    if (!existsSync(this.directory)) {
      mkdirSync(this.directory, { recursive: true });
    }
  }

  /**
   * Generates a cache key from the provided key
   * @param {string} key - The original key
   * @returns {string} The hashed cache key
   * @private
   */
  getCacheKey(key) {
    return Buffer.from(key).toString('base64');
  }

  /**
   * Retrieves data from the cache
   * @param {string} key - The key to retrieve
   * @returns {Promise<any|null>} The cached data or null if not found
   */
  async get(key) {
    const cacheKey = this.getCacheKey(key);
    const filePath = join(this.directory, cacheKey);

    try {
      const stats = await promises.stat(filePath);
      if (Date.now() - stats.mtime.getTime() > this.maxAge) {
        await promises.unlink(filePath);
        return null;
      }

      const data = await promises.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  }

  /**
   * Stores data in the cache
   * @param {string} key - The key to store
   * @param {any} data - The data to store
   * @returns {Promise<void>}
   */
  async set(key, data) {
    const cacheKey = this.getCacheKey(key);
    const filePath = join(this.directory, cacheKey);
    await promises.writeFile(filePath, JSON.stringify(data));
  }

  /**
   * Removes an item from the cache
   * @param {string} key - The key to remove
   * @returns {Promise<void>}
   */
  async delete(key) {
    const cacheKey = this.getCacheKey(key);
    const filePath = join(this.directory, cacheKey);
    try {
      await promises.unlink(filePath);
    } catch (error) {
      // Ignore errors if the file doesn't exist
    }
  }

  /**
   * Clears all items from the cache
   * @returns {Promise<void>}
   */
  async clear() {
    const files = await promises.readdir(this.directory);
    await Promise.all(
      files.map(file => promises.unlink(join(this.directory, file)))
    );
  }
}

// Example usage
async function example() {
  const cache = new Cache();

  // Set a value
  await cache.set('user:123', { name: 'John Doe', age: 30 });

  // Get a value
  const user = await cache.get('user:123');
  console.log(user); // { name: 'John Doe', age: 30 }

  // Delete a value
  await cache.delete('user:123');

  // Clear the cache
  await cache.clear();
}

example().catch(console.error);

/**
 * Explanation:
 * 
 * 1. The Cache class implements a simple file-based caching system for Node.js.
 * 2. It stores each cache item as a separate file in a designated directory.
 * 3. The constructor takes optional parameters for the cache directory and max age of cache items.
 * 4. The `get` method retrieves data from the cache, checking if it's expired based on the file's modification time.
 * 5. The `set` method stores data in the cache as a JSON string.
 * 6. The `delete` method removes a specific item from the cache.
 * 7. The `clear` method removes all items from the cache.
 * 8. Cache keys are base64 encoded to ensure they're safe for use as filenames.
 * 9. The class uses async/await for all file operations to avoid blocking the event loop.
 * 10. Error handling is implemented to gracefully handle missing files or other I/O errors.
 * 
 * This implementation is suitable for Node.js environments and provides a simple,
 * file-based caching solution. For production use, consider adding more robust error
 * handling, logging, and potentially using a database or in-memory store for better performance.
 */
