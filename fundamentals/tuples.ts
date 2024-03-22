let rgb : [number, number, number] = [255, 255, 146]

// rgb = [232, 232, 121, 21] // ❌
rgb = [232, 232, 121]

/* ANOMALY: But by the nature of it, when I call it a tupple 
(concept which resides with TS and not with JS), I shouldn't 
have the privilege to modify the contents of it, right ?

Well in reality we can modify its contents and its weird 
and this happens as follows */

rgb[1] = 21
/* below line produces an error although if I would have used a 
'type' with value [number, number, number] while declaring 'rgb' 
then it would have yielded no error */

// rgb.push('212') // ❌
rgb.push(212) // similarly many other methods of array are applicable