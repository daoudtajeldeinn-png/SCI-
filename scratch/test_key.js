const key = "RkpWVkRWMFVmUmpNd0l6WERGMVhCMWtVQmhFVTZJVE14RWpOMU1ETTNRVE40RWpPMklETXhVa1JDWjBOemdUUnRNVU40RVVMeUlVTXgwU09DUmtNdE0wUXlRRU5HWnpO";

try {
    const reversedB64 = Buffer.from(key, 'base64').toString('utf-8');
    console.log("Step 1 (Reversed B64):", reversedB64);
    
    const b64 = reversedB64.split('').reverse().join('');
    console.log("Step 2 (B64):", b64);
    
    const raw = Buffer.from(b64, 'base64').toString('utf-8');
    console.log("Step 3 (Raw):", raw);
} catch (e) {
    console.error("Error:", e.message);
}
