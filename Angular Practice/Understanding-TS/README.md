# TypeScript Notes

### Types

1. Number
   - All numbers, no differentiation between integers or floats.
2. String
   - All text values.
3. Boolean
   - Just 'true' or 'false' and not 'truthy' or 'falsy' values.
4. Object
   - Any JavaScript Objects.
5. Array
   - Any JavaScript Arrays. Types can be flexible or strict.
6. Tuple
   - [1, 2] - Added by TypeScript: Fixed-length array.
7. Enum
   - Added by TypeScript: Automatically enumerated global constant identifiers.
8. Any
   - Any kind of value and TypeScript would not get upset. Becareful with this, if everything is Any than why use TypeScript?

<hr>

### Type Inference

      TypeScript does its best to understand which type you have in a certain constant or variable and allows you to not assign the type to everything. It is possible to label everything, but it is redundant and considered bad practice.
