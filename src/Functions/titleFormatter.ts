// Kezdő betű nagybetű
export function titleFormatter (title: string): string {
  //console.log(title.charAt(0).toUpperCase() + title.slice(1).toLowerCase())
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
}