/*
 * @Description: 路由配置
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-29 10:39:33
 * @LastEditTime: 2022-08-29 11:34:41
 */
import { useRoutes, Link } from "react-router-dom"
import Home from '@/views/home'

// useRoutes钩子，使用类似于Vue的路由形式，是js对象形式而非`<Routes>`元素来定义路由表。

export default () => useRoutes([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "messages",
    //     element: <DashboardMessages />,
    //   },
    //   { path: "tasks", element: <DashboardTasks /> },
    // ],
  },
  {
    path: "about",
    element: <About />
  }
])

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}