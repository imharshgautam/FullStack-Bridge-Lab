ASSIGNMENT 5 — Core JavaScript (ES6+)

Files:
  Q1_callback.js
  Q2_apply_operation.js
  Q3_arrow_vs_normal_function.js
  Q4_car_prototype.js
  Q5_person_student_inheritance.js
  Q6_person_faculty_professor_chain.js
  Q7_closure_multiplier.js
  Q8_custom_myMap.js
  Q9_classes_extends_super.js

How to run:
1. Install Node.js if it is not already installed.
2. Open Terminal in this folder.
3. Run an individual question, for example:
     node Q1_callback.js
4. Repeat with any other .js filename.

Notes:
- Q3's arrow-function `this.name` is normally undefined in a Node.js CommonJS file.
  Arrow functions inherit `this` from the surrounding scope; they do not bind it
  to the object. A normal function method gets `this` from the call site.
- Q8 implements a useful map-like method for learning. In production, avoid
  modifying built-in prototypes because it can cause naming conflicts.
