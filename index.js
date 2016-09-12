var users = [{ name: 'Peter' }, { name: 'Kate' }];
console.info('[+] Create users =', JSON.stringify(users));

var weakMap = new WeakMap();
console.info('[+] Create weakMap =', JSON.stringify(weakMap));

weakMap.set(users[0], 'some info 1');
console.info('[+] Set message for users[0] =', 'some info 1');

weakMap.set(users[1], 'some info 2');
console.info('[+] Set message for users[1] =', 'some info 2');

console.log('[*] Display message for users[0]: "%s"', weakMap.get(users[0])); // 'some info 1'

users.splice(0, 1);
console.warn('[-] Remove first object from "users" array');

console.log('[*] Display message for users[0]: "%s"', weakMap.get(users[0])); // 'some info 2'

const GC_TIMEOUT = 5 * 1000;
const GC_CHECKER_INTERVAL = 500;

setTimeout(function () {
    setInterval(function () {
        console.log('%c Display weakMap collection', 'color: green', weakMap);
    }, GC_CHECKER_INTERVAL);
}, GC_TIMEOUT);

console.info('%c Wait "%d" time for GC', 'color: blue', GC_TIMEOUT);
console.info('%c After that time execute checking on each "%d"', 'color: blue', GC_CHECKER_INTERVAL);
