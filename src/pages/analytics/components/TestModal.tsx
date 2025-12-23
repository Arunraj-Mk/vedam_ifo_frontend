type QuestionOption = {
    label: string
    value: string
    isCorrect?: boolean
    isSelected?: boolean
  }
  
  type Question = {
    title: string
    options: QuestionOption[]
  }
  
  type Section = {
    name: string
    score: string
    question?: Question
  }
  
  type Insight = {
    text: string
  }
  
  type Props = {
    testTitle: string
    date: string
    duration: string
    sections: Section[]
    insights: Insight[]
  }
  



export default function TestResultModalContent({
    testTitle,
    date,
    duration,
    sections,
    insights,
  }: Props) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold">{testTitle}</h2>
          <p className="text-sm text-gray-500">
            Date: {date} • Duration: {duration}
          </p>
        </div>
  
        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <details
              key={idx}
              className="rounded-lg border bg-white"
              open={idx === 0}
            >
              <summary className="cursor-pointer px-4 py-3 font-medium flex justify-between">
                <span>{section.name}</span>
                <span>{section.score}</span>
              </summary>
  
              {section.question && (
                <div className="px-4 pb-4 space-y-3">
                  <p className="font-medium">
                    {section.question.title}
                  </p>
  
                  <div className="space-y-2">
                    {section.question.options.map((opt, i) => {
                      const base =
                        "flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
                      const correct = opt.isCorrect
                        ? "border-green-500 bg-green-50"
                        : ""
                      const wrong = opt.isSelected && !opt.isCorrect
                        ? "border-red-500 bg-red-50"
                        : ""
  
                      return (
                        <div
                          key={i}
                          className={`${base} ${correct} ${wrong}`}
                        >
                          <input type="radio" checked={opt.isSelected} readOnly />
                          {opt.label}
                        </div>
                      )
                    })}
                  </div>
  
                  <div className="flex justify-end text-sm text-gray-500">
                    <button className="hover:underline">Previous</button>
                    <span className="mx-2">|</span>
                    <button className="text-green-600 hover:underline">
                      Next Question →
                    </button>
                  </div>
                </div>
              )}
            </details>
          ))}
        </div>
  
        {/* Performance Insights */}
        <div className="rounded-lg border border-purple-400 bg-purple-50 p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            🎓 Performance Insights
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {insights.map((insight, i) => (
              <li key={i}>{insight.text}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  