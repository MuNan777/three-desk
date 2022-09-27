import scene from "./scene"
import Table from "./mesh/table"
import BaseMesh from "./mesh/baseMesh"

export function createMesh () {
  const meshes: BaseMesh[] = []
  meshes.push(new Table(scene))
  return meshes
}