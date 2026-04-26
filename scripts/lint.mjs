import fs from 'node:fs'

const files = fs.readdirSync('src/utils').filter((file) => file.endsWith('.js'))
const offenders = []

for (const file of files) {
  const content = fs.readFileSync(`src/utils/${file}`, 'utf8')
  if (content.includes('\t')) offenders.push(`${file}: contains tab character`)
  if (content.split('\n').some((line) => /\s$/.test(line))) offenders.push(`${file}: trailing whitespace`) 
}

if (offenders.length > 0) {
  console.error('Lint failed:')
  offenders.forEach((item) => console.error(`- ${item}`))
  process.exit(1)
}

console.log('Custom lint checks passed for src/utils/*.js')
