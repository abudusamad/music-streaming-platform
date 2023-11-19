interface PageProps {
  children: React.ReactNode
}

export default function Home({
  children
}: PageProps) {
  return (
    <div className="h-full">
      Hello World
      {children}
   </div>
  )
}
