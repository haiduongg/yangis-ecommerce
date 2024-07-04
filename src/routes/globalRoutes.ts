import { ElementType } from "react"
import HomePage from "../pages/HomePage"

interface IRoute {
	id: number,
	path: string,
	component: ElementType
	layout?: ElementType
}

const globalRoutes: IRoute[] = [{ id: 1, path: '/', component: HomePage }]

export default globalRoutes
