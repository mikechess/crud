


export default function Home() {
  return (
    <main className="max-w-screen-sm m-auto h-screen">
      <section className="max-w-full bg-neutral-900 p-4 mt-4 h-full rounded-md">
        <ul className="max-w-lg m-auto">
          <li className="p-4 bg-neutral-950 mt-5 mb-4 rounded-md">
            <p>Note Title</p>
            <h5>Note Content will go here. Just data showing what the content will be once we have full notes setup</h5>
            <button className="mr-3 bg-lime-700 mt-2 p-2 rounded-md">Edit</button>
            <button className="mr-3 bg-rose-600 mt-2 p-2 rounded-md">Delete</button>
          </li>
        </ul>
      </section>
    </main>
  )
}
