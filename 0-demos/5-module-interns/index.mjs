import { arch, platform, cpus } from 'node:os'

if(process.platform.startsWith('win')) {
  console.log('exec', 'cmd')
} else {
  console.log('exec', "apk")
}

console.log('arch', arch(), 'depuis process', process.arch)
console.log('platform', platform(), "depuis process", process.platform)
console.log('cpus', cpus())