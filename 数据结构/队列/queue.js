const a = { value: 'a' }
const b = { value: 'b' }
const c = { value: 'c' }
const d = { value: 'd' }
const e = { value: 'e' }

a.next = b
b.next = c
c.next = d
d.next = e

const traversingList = () => {
  let p = a
  while (p) {
    console.log(p.value)
    p = p.next
  }
}

traversingList() // a b c d e

// insert f
const f = { value: 'f' }
a.next = f
f.next = b
console.log('--- insert start ----')
traversingList() // a f b c d e

// delete c
b.next = d

console.log('--- del start ----')
traversingList()

// ? eg: 删除节点
//  [4,5,1,9],node = 5
const node = 5
// 删除链表节点（相当于把 删除节点 与 下一节点 交换，next 直接指向 下一节点的下一节点）
// 删除节点 val = 下一节点 val
// 删除节点 next = 下一节点 next

const delNode = node => {
  node.value = node.next.value
  node.next = node.next.next
}

delNode(node)
