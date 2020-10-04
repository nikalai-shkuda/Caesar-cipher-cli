Usage example:

1. install dependencies using the command: npm i
2. go to scr folder in our terminal
3. enter one of the following commands:

  - $ node index -t encode -s 7 -i "./input.txt" -o "./output.txt"
  - $ node index --type encode --shift 7 --input plain.txt --output encoded.txt
  - $ node index --type decode --shift 7  --output plain.txt
  - $ node index --type decode --shift 7 --input decoded.txt

  You can use these parameters:

  - '-t, --type <string>', - 'an action encode/decode'
  - '-s, --shift <number>', - 'a shift'
  - '-i, --input <string>', - 'an input file'
  - '-o, --output <string>', - 'an output file'