/**
 * Convert JavaScript Set to Java Set.
 *
 * @memberOf utils
 * @param {Set} set JavaScript Set Object ({@link https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set})
 * @returns {HostSet} Java Set ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html})
 */
export function jsSetToJavaSet(set: Set<any>): HostSet;
/**
 * Convert JavaScript Array to Java Set.
 *
 * @memberOf utils
 * @param {Array} arr JavaScript Array
 * @returns {HostSet} Java Set ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html})
 */
export function jsArrayToJavaSet(arr: any[]): HostSet;
/**
 * Convert JavaScript Array to Java List.
 *
 * @memberOf utils
 * @param {Array} arr JavaScript Array
 * @returns {HostList} Java List ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html})
 */
export function jsArrayToJavaList(arr: any[]): HostList;
/**
 * Convert Java List to JavaScript Array.
 *
 * @memberOf utils
 * @param {JavaList} set Java Set ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html})
 * @returns {Array} JavaScript Array
 */
export function javaListToJsArray(list: any): any[];
/**
 * Convert Java Set to JavaScript Array.
 *
 * @memberOf utils
 * @param {HostSet} set Java Set ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html})
 * @returns {Array} JavaScript Array
 */
export function javaSetToJsArray(set: HostSet): any[];
/**
 * Convert Java Set to JavaScript Set.
 *
 * @memberOf utils
 * @param {HostSet} set Java Set ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html})
 * @returns {Set} JavaScript Set Object ({@link https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Set})
 */
export function javaSetToJsSet(set: HostSet): Set<any>;
/**
 * Generate a random UUID.
 *
 * @memberOf utils
 * @returns {string} random UUID
 */
export function randomUUID(): string;
/**
 * Outputs all members and properties of an object and whether it is a JS or a Java Object to the log.
 *
 * @memberOf utils
 * @param {*} obj object
 * @param {boolean} [dumpProps=false] whether properties also should be dumped
 */
export function dumpObject(obj: any, dumpProps?: boolean): void;
/**
 * Checks whether an object is instance of a Java class.
 *
 * @memberOf utils
 * @param {*} instance object
 * @param {HostClass} type Java class ({@link https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Class.html})
 * @returns {boolean} whether it is an instance of a Java class
 * @throws error if type is not a java class
 */
export function isJsInstanceOfJava(instance: any, type: HostClass): boolean;
//# sourceMappingURL=utils.d.ts.map