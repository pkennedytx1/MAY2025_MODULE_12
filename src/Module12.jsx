import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";

// Module12_Objects_React_Interactive.jsx
// Interactive React playground for hands-on learning
// Students can experiment with code, see live results, and learn by doing

export default function Module12() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 text-slate-800">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1 space-y-6">
            <LearningPathPanel />
            <QuickReferencePanel />
          </div>

          <div className="lg:col-span-3 space-y-8">
            <InteractiveCard title="🎯 Try It: Object Destructuring Playground">
              <ObjectDestructure />
            </InteractiveCard>

            <InteractiveCard title="🔧 Build It: Dynamic Component Generator">
              <MapToButtons />
              <ClosureDemo />
            </InteractiveCard>

            <InteractiveCard title="🗑️ Code It: Immutable State Management">
              <DeleteListExercise />
            </InteractiveCard>

            <div className="grid lg:grid-cols-2 gap-6">
              <InteractiveCard title="⚡ Experiment: useEffect & Lifecycle">
                <UseEffectDemo />
              </InteractiveCard>

              <InteractiveCard title="🔄 Test It: Component Mount/Unmount">
                <MountUnmountSquares />
              </InteractiveCard>
            </div>

            <InteractiveCard title="🛒 Build It: Real-World Shopping Cart">
              <ShoppingCartDemo />
            </InteractiveCard>

            <InteractiveCard title="🧠 Understand: Re-render Optimization">
              <ParentChildRerenderDemo />
            </InteractiveCard>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-start justify-between bg-white rounded-3xl shadow-lg p-8 mb-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          React Objects & JSX Playground
        </h1>
        <p className="text-lg text-slate-600 mt-3">Learn by coding! Experiment with each concept below</p>
      </div>
      <div className="text-sm text-slate-500 bg-gray-50 rounded-2xl p-4">
        <div className="font-semibold">🎯 Your Mission</div>
        <div className="mt-1">Code, break, fix, repeat!</div>
      </div>
    </header>
  );
}

function InteractiveCard({ title, children }) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-200">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b border-gray-200 pb-3">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function LearningPathPanel() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-4">🚀 Your Learning Journey</h3>
      <div className="space-y-4">
        <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-600">1️⃣</span>
            <span className="font-semibold text-blue-800">Start Here</span>
          </div>
          <p className="text-sm text-blue-700">Try the destructuring playground first</p>
        </div>
        
        <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-600">2️⃣</span>
            <span className="font-semibold text-green-800">Build Components</span>
          </div>
          <p className="text-sm text-green-700">Generate dynamic lists & buttons</p>
        </div>
        
        <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-purple-600">3️⃣</span>
            <span className="font-semibold text-purple-800">Master State</span>
          </div>
          <p className="text-sm text-purple-700">Practice immutable updates</p>
        </div>
        <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-600">4️⃣</span>
            <span className="font-semibold text-yellow-800">Advanced Patterns</span>
          </div>
          <p className="text-sm text-yellow-700">Hooks, lifecycle, optimization</p>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl text-xs text-purple-700 border border-purple-200">
        💡 <strong>Pro Tip:</strong> Open your browser console to see the magic happen!
      </div>
    </div>
  );
}

function QuickReferencePanel() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">📚 Quick Reference</h3>
      <div className="space-y-3 text-sm text-slate-700">
        <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200">
          <div className="font-semibold text-yellow-800 mb-1">💥 Common Gotchas</div>
          <div style={{ height: '10px'}}></div>
          <div className="text-xs text-yellow-700 space-y-1">
            <div>• Don't mutate state directly</div>
            <div>• Always use unique keys in lists</div>
            <div>• Watch out for closure bugs</div>
          </div>
          <div style={{ height: '10px'}}></div>
        </div>
        
        <div className="p-3 bg-green-50 rounded-xl border border-green-200">
          <div className="font-semibold text-green-800 mb-1">✅ Best Practices</div>
          <div style={{ height: '10px'}}></div>
          <div className="text-xs text-green-700 space-y-1">
            <div>• Use destructuring for clean code</div>
            <div>• Prefer functional updates</div>
            <div>• Keep components focused</div>
            <div style={{ height: '10px'}}></div>
          </div>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
          <div className="font-semibold text-blue-800 mb-1">🔧 Tools You'll Use</div>
          <div style={{ height: '10px'}}></div>
          <div className="text-xs text-blue-700 space-y-1">
            <div>• useState for local state</div>
            <div>• useEffect for side effects</div>
            <div>• React.memo for optimization</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------- Destructuring interactive ----------------------
function ObjectDestructure() {
  const [text, setText] = useState(
    JSON.stringify(
      {
        id: 101,
        name: "Nina Ramos",
        role: "Instructor",
        stats: { lessons: 13, quizzes: 2 },
        contact: { email: "nina@school.edu", phone: "555-0123" },
      },
      null,
      2
    )
  );

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    parsed = { error: "invalid JSON" };
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">🎯 Challenge: Break the Destructuring!</h4>
        <p className="text-sm text-blue-700">
          Try these experiments: rename the "name" key, remove the "stats" object, or add new properties. 
          Watch how the destructuring handles missing or renamed keys!
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">🖊️ Edit the object (JSON):</label>
          <br />
          <textarea
            style={{ width: '100%', height: '300px' }}
            className="w-full h-48 p-4 mt-2 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-mono text-sm" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Try changing the object structure..."
          />
          <div className="mt-3 space-y-2">
            <button 
              onClick={() => setText(JSON.stringify({ id: 999, title: "New Object", tags: ["react", "jsx"] }, null, 2))}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              🧪 Try a different object
            </button>
            <button 
              onClick={() => setText(JSON.stringify({ user: { name: "John", age: 25 }, settings: { theme: "dark" } }, null, 2))}
              className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors ml-2"
            >
              🌟 Nested structure
            </button>
          </div>
        </div>

        <div className="text-sm">
          <label className="block text-sm font-medium text-slate-700 mb-3">👀 Live destructuring result:</label>
          <br />
          <div className="bg-gray-50 rounded-2xl p-6 font-mono border-2 border-gray-200">
            {parsed && parsed.error ? (
              <div className="text-red-600 font-semibold">❌ Invalid JSON: {parsed.error}</div>
            ) : (
              <DestructurePreview obj={parsed} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DestructurePreview({ obj }) {
  // Demonstrate destructuring with defaults and renaming
  const { name: fullName = "(missing name)", role = "(role)", stats = {} } = obj || {};
  const { lessons = 0, quizzes = 0 } = stats;

  return (
    <div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
          <span className="font-medium text-slate-700">fullName: </span>
          <code className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 font-mono text-sm border border-blue-200">{String(fullName)}</code>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
          <span className="font-medium text-slate-700">role:</span>
          <code className="bg-green-50 px-3 py-1 rounded-lg text-green-700 font-mono text-sm border border-green-200">{String(role)}</code>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
          <span className="font-medium text-slate-700">lessons:</span>
          <code className="bg-purple-50 px-3 py-1 rounded-lg text-purple-700 font-mono text-sm border border-purple-200">{String(lessons)}</code>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
          <span className="font-medium text-slate-700">quizzes:</span>
          <code className="bg-orange-50 px-3 py-1 rounded-lg text-orange-700 font-mono text-sm border border-orange-200">{String(quizzes)}</code>
        </div>
      </div>
    <br />
      <div className="mt-4 p-3 bg-green-50 rounded-xl text-xs text-green-700">
        🎯 <strong>What you learned:</strong> Destructuring handles missing keys gracefully with defaults!
      </div>
    </div>
  );
}

// ---------------------- Map to buttons & closure demo ----------------------
function MapToButtons() {
  const [items, setItems] = useState(["Apple", "Banana", "Cantaloupe"]);
  const [log, setLog] = useState([]);

  function handleClick(name, index) {
    const logMessage = `Clicked ${name} (index ${index})`;
    console.log(`🖱️ ${logMessage}`);
    setLog((l) => [logMessage, ...l].slice(0, 10));
  }

  function addItem() {
    const newItem = `Item-${items.length}`;
    console.log(`➕ Added new item: ${newItem}`);
    setItems((s) => [...s, newItem]);
  }

  function removeItem() {
    const removedItem = items[items.length - 1];
    console.log(`➖ Removed item: ${removedItem}`);
    setItems((s) => s.slice(0, -1));
  }

  function reverseItems() {
    console.log(`🔄 Reversed item order`);
    setItems((s) => [...s].reverse());
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">🔧 Challenge: Build Dynamic Lists!</h4>
        <p className="text-sm text-green-700">
          Add/remove items and watch React generate new components. Notice how each button maintains its identity!
          <br /><strong>💡 Check the browser console (F12) to see detailed logs!</strong>
        </p>
      </div>
      
      <div className="flex gap-3 flex-wrap">
        {items.map((it, i) => (
            <>
                <button 
                    key={it} 
                    onClick={() => handleClick(it, i)} 
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                    {it}
                </button>
                <br/>
            </>
        ))}
      </div>

      <div className="flex gap-3">
        <button 
          className="px-4 py-2 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200" 
          onClick={addItem}
        >
          ➕ Add item
        </button>
        <button 
          className="px-4 py-2 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200" 
          onClick={removeItem}
        >
          ➖ Remove last
        </button>
        <button 
          className="px-4 py-2 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200" 
          onClick={reverseItems}
        >
          🔄 Reverse order
        </button>
      </div>

      <div className="p-3 bg-blue-50 rounded-xl text-sm text-blue-700">
        <br /><br />
        🎓 <strong>Key Learning:</strong> React uses keys to track components. Try reordering items and see what happens!
        <br /><br />📱 <strong>Pro tip:</strong> Open DevTools (F12) to see detailed console logs for every interaction!
      </div>
    </div>
  );
}

function ClosureDemo() {
  const [count, setCount] = useState(0);
  const [items] = useState(["A", "B", "C", "D"]);
  const [messages, setMessages] = useState([]);

  // BAD: using a loop variable incorrectly (common closure bug)
  function makeHandlersBad() {
    const handlers = [];
    for (var i = 0; i < items.length; i++) {
      handlers.push(() => {
        const message = `Bad handler clicked index ${i}`;
        console.log(`❌ ${message} - This is wrong!`);
        setMessages((m) => [message, ...m].slice(0, 6));
      });
    }
    return handlers;
  }

  // GOOD: capture current i
  function makeHandlersGood() {
    return items.map((_, i) => () => {
      const message = `Good handler clicked index ${i}`;
      console.log(`✅ ${message} - This is correct!`);
      setMessages((m) => [message, ...m].slice(0, 6));
    });
  }

  const handlersBad = useMemo(() => makeHandlersBad(), [items]);
  const handlersGood = useMemo(() => makeHandlersGood(), [items]);

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <div className="p-4 bg-red-50 rounded-2xl border border-red-200 mb-4">
        <h4 className="font-semibold text-red-800 mb-2">💥 The Famous Closure Bug!</h4>
        <p className="text-sm text-red-700">
          This is a classic JavaScript gotcha! Click the "Bad" buttons and see what happens. 
          Then try the "Good" ones to see the difference.
          <br />
          <br /><strong>🔍 Check the console to see the bug in action!</strong>
        </p>
      </div>
      
      <div className="text-lg font-semibold mb-4 text-slate-800">Test the buttons:</div>
      <br />
      <div className="flex gap-4 mt-4">
        {items.map((it, i) => (
          <div key={it} className="flex flex-col items-center space-y-2">
            <button 
              onClick={handlersBad[i]} 
              className="px-4 py-2 border-2 border-red-300 rounded-xl bg-red-50 text-red-700 text-sm hover:bg-red-100 transition-colors duration-200"
            >
              ❌ Bad {it}
            </button>
            <button 
              onClick={handlersGood[i]} 
              className="px-4 py-2 border-2 border-green-300 rounded-xl bg-green-50 text-green-700 text-sm hover:bg-green-100 transition-colors duration-200"
            >
              ✅ Good {it}
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-3 p-3 bg-yellow-50 rounded-xl text-sm text-yellow-700">
        <br />
        🔍 <strong>Why this happens:</strong> The "Bad" version captures the final value of `i`, while "Good" captures each value individually!
        <br /><br />📱 <strong>Console logs:</strong> Watch how the "Bad" buttons always log the same index!
      </div>
    </div>
  );
}

// ---------------------- Delete list exercise ----------------------
function DeleteListExercise() {
  const initial = [
    { id: 1, title: "Write lesson plan", priority: "High", category: "Planning" },
    { id: 2, title: "Record video", priority: "Medium", category: "Content" },
    { id: 3, title: "Create quiz", priority: "High", category: "Assessment" },
  ];
  const [list, setList] = useState(initial);

  function removeItem(id) {
    const item = list.find(x => x.id === id);
    console.log(`🗑️ Removing item: ${item?.title} (ID: ${id})`);
    setList((l) => l.filter((x) => x.id !== id));
  }

  function addItem() {
    const newId = Math.max(...list.map(item => item.id), 0) + 1;
    const newItem = {
      id: newId,
      title: `New Task ${newId}`,
      priority: "Medium",
      category: "Planning"
    };
    console.log(`➕ Adding new item: ${newItem.title} (ID: ${newId})`);
    setList(l => [...l, newItem]);
  }

  function resetList() {
    console.log(`🔄 Resetting list to initial state`);
    setList(initial);
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-700 border-red-300";
      case "Medium": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Low": return "bg-green-100 text-green-700 border-green-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Planning": return "📋";
      case "Content": return "🎥";
      case "Assessment": return "📝";
      default: return "📌";
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">🗑️ Challenge: Practice Immutable Updates!</h4>
        <p className="text-sm text-purple-700">
          Delete items and add new ones. Notice how React creates a new array instead of modifying the old one. 
          This is the key to predictable state updates!
          <br /><strong>📱 Check the console to see each operation logged!</strong>
        </p>
      </div>
      
      <div className="flex gap-3 mb-4">
        <button 
          onClick={addItem}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200"
        >
          ➕ Add New Task
        </button>
        <button 
          onClick={resetList}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
        >
          🔄 Reset List
        </button>
      </div>
      
      <div className="grid gap-4">
        {list.map((it) => (
          <div key={it.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="flex items-center gap-4">
              <span className="text-2xl">{getCategoryIcon(it.category)}</span>
              <div>
                <div className="font-semibold text-lg text-slate-800">{it.title}</div>
                <div className="text-sm text-slate-600">{it.category}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(it.priority)}`}>
                {it.priority}
              </span>
              <button 
                onClick={() => removeItem(it.id)} 
                className="px-4 py-2 border-2 border-red-300 rounded-xl text-red-700 hover:bg-red-50 transition-colors duration-200 hover:scale-105 transform"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-green-50 rounded-2xl text-sm text-green-700">
        📝 <strong>Your Mission:</strong> Implement the delete function using an immutable update. 
        Never mutate the original array - always create a new one!
      </div>
    </div>
  );
}

// ---------------------- Hooks & useEffect demo ----------------------
function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [effectLog, setEffectLog] = useState([]);

  useEffect(() => {
    const message = `🔄 Mount: UseEffectDemo mounted`;
    console.log(message);
    setEffectLog(prev => [message, ...prev.slice(0, 9)]);
    return () => {
      const unmountMessage = `💀 Unmount: UseEffectDemo unmounted`;
      console.log(unmountMessage);
      setEffectLog(prev => [unmountMessage, ...prev.slice(0, 9)]);
    };
  }, []);

  useEffect(() => {
    const message = `📊 Count changed: ${count}`;
    console.log(message);
    setEffectLog(prev => [message, ...prev.slice(0, 9)]);
  }, [count]);

  function incrementCount() {
    console.log(`🔢 Incrementing count from ${count} to ${count + 1}`);
    setCount((c) => c + 1);
  }

  function toggleChild() {
    console.log(`👁️ ${show ? 'Hiding' : 'Showing'} child component`);
    setShow((s) => !s);
  }

  function resetCount() {
    console.log(`🔄 Resetting count from ${count} to 0`);
    setCount(0);
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">⚡ Experiment: Watch useEffect in Action!</h4>
        <p className="text-sm text-blue-700">
          Change the count and toggle the child component. Watch how useEffect runs and cleans up. 
          Open your browser console to see the full story!
          <br /><strong>📱 Every action is logged to the console!</strong>
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={incrementCount} 
          className="px-6 py-3 border-2 border-blue-300 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          🔢 Increment {count}
        </button>
        <button 
          onClick={toggleChild} 
          className="px-6 py-3 border-2 border-purple-300 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          {show ? '👁️ Hide' : '👁️ Show'} child
        </button>
        <button 
          onClick={resetCount} 
          className="px-6 py-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          🔄 Reset Count
        </button>
      </div>

      <div className="mt-4">
        {show ? <EffectChild count={count} /> : <div className="text-sm text-slate-500 p-4 bg-gray-100 rounded-2xl text-center">Child hidden (unmounted) 🚫</div>}
      </div>

      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
        <h5 className="font-semibold text-slate-800 mb-2">📝 Effect Log (Live):</h5>
        <div className="font-mono text-xs bg-white rounded-xl p-3 h-24 overflow-auto border">
          {effectLog.length > 0 ? effectLog.join('\n') : 'No effects triggered yet...'}
        </div>
      </div>

      <div className="p-3 bg-green-50 rounded-xl text-sm text-green-700">
        🎯 <strong>What to observe:</strong> useEffect dependencies and cleanup when unmounting. 
        Notice how the effect runs every time count changes!
      </div>
    </div>
  );
}

function EffectChild({ count }) {
  const [childEffectLog, setChildEffectLog] = useState([]);

  useEffect(() => {
    const message = `👶 EffectChild effect ran for count ${count}`;
    console.log(message);
    setChildEffectLog(prev => [message, ...prev.slice(0, 4)]);
    return () => {
      const cleanupMessage = `🧹 EffectChild cleanup for count ${count}`;
      console.log(cleanupMessage);
      setChildEffectLog(prev => [cleanupMessage, ...prev.slice(0, 4)]);
    };
  }, [count]);

  return (
    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-2 border-green-200">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-lg font-semibold text-green-800">Child Component</div>
          <div className="text-2xl font-bold text-green-700">Count: {count}</div>
        </div>
        <div className="text-4xl">👶</div>
      </div>
      
      <div className="bg-white rounded-xl p-3 border border-green-200">
        <div className="text-xs font-semibold text-slate-600 mb-1">Child Effect Log:</div>
        <div className="font-mono text-xs text-slate-700 h-16 overflow-auto">
          {childEffectLog.length > 0 ? childEffectLog.join('\n') : 'No child effects yet...'}
        </div>
      </div>
    </div>
  );
}

// ---------------------- Mount / Unmount squares ----------------------
function MountUnmountSquares() {
  const [squares, setSquares] = useState([0]);
  const [mountLog, setMountLog] = useState([]);
  const nextId = useRef(1);

  function add() {
    const newId = nextId.current++;
    console.log(`➕ Mounting new Square component with ID: ${newId}`);
    setSquares((s) => [...s, newId]);
    setMountLog(prev => [`➕ Mounted Square ${newId}`, ...prev.slice(0, 9)]);
  }
  
  function remove() {
    if (squares.length > 0) {
      const removedId = squares[squares.length - 1];
      console.log(`➖ Unmounting Square component with ID: ${removedId}`);
      setSquares((s) => s.slice(0, -1));
      setMountLog(prev => [`➖ Unmounted Square ${removedId}`, ...prev.slice(0, 9)]);
    }
  }

  function clearAll() {
    const removedIds = [...squares];
    console.log(`🗑️ Clearing all ${removedIds.length} Square components: ${removedIds.join(', ')}`);
    setSquares([]);
    setMountLog(prev => [`🗑️ Cleared all squares: ${removedIds.join(', ')}`, ...prev.slice(0, 9)]);
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">🔄 Test It: Component Lifecycle!</h4>
        <p className="text-sm text-yellow-700">
          Add and remove squares to see React components mount and unmount. 
          Each square logs its lifecycle events - check the console and watch the log below!
          <br /><strong>📱 Every mount/unmount is logged to the console!</strong>
        </p>
      </div>
      
      <div className="flex gap-4">
        <button 
          onClick={add} 
          className="px-6 py-3 border-2 border-green-300 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          ➕ Mount Square
        </button>
        <button 
          onClick={remove} 
          className="px-6 py-3 border-2 border-red-300 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          ➖ Unmount Last
        </button>
        <button 
          onClick={clearAll} 
          className="px-6 py-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          🗑️ Clear All
        </button>
      </div>
      
      <div className="flex gap-4 mt-4 flex-wrap">
        {squares.map((id) => (
          <Square key={id} id={id} />
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
        <h5 className="font-semibold text-slate-800 mb-2">📱 Mount/Unmount Log (UI):</h5>
        <div className="font-mono text-xs bg-white rounded-xl p-3 h-24 overflow-auto border">
          {mountLog.length > 0 ? mountLog.join('\n') : 'No lifecycle events yet...'}
        </div>
      </div>
      
      <div className="p-3 bg-yellow-50 rounded-xl text-sm text-yellow-700">
        📱 <strong>Pro tip:</strong> Each square logs mount/unmount to the browser console. 
        Open DevTools to see the full lifecycle story!
        <br />🔍 <strong>Console logs:</strong> Watch the detailed mount/unmount sequence in real-time!
      </div>
    </div>
  );
}

function Square({ id }) {
  useEffect(() => {
    console.log(`🟦 Square ${id} mounted`);
    return () => console.log(`💀 Square ${id} unmounted`);
  }, [id]);

  return (
    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-2xl border-2 border-blue-200 font-bold text-blue-700 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 transform">
      {id}
    </div>
  );
}

// ---------------------- Shopping cart complex data ----------------------
function ShoppingCartDemo() {
  const initial = {
    customers: [
      { id: "u1", name: "Maya", avatar: "👩‍💼", totalSpent: 0 },
      { id: "u2", name: "Omar", avatar: "👨‍💻", totalSpent: 0 },
    ],
    carts: {
      u1: [
        { sku: "shirt-1", title: "Graphic Tee", qty: 2, price: 18, image: "👕" },
        { sku: "hat-1", title: "Baseball Hat", qty: 1, price: 14, image: "🧢" },
      ],
      u2: [
        { sku: "scarf-1", title: "Wool Scarf", qty: 1, price: 24, image: "🧣" },
      ],
    },
  };

  const [data, setData] = useState(initial);
  const [actionLog, setActionLog] = useState([]);

  function logAction(action) {
    console.log(`🛒 ${action}`);
    setActionLog(prev => [action, ...prev.slice(0, 9)]);
  }

  function changeQty(userId, sku, delta) {
    const item = data.carts[userId].find(i => i.sku === sku);
    const newQty = Math.max(0, item.qty + delta);
    console.log(`📊 ${delta > 0 ? 'Adding' : 'Removing'} ${Math.abs(delta)} ${item.title} for ${data.customers.find(c => c.id === userId)?.name}. New quantity: ${newQty}`);
    
    setData((d) => {
      const carts = { ...d.carts };
      carts[userId] = carts[userId].map((it) => (it.sku === sku ? { ...it, qty: newQty } : it));
      return { ...d, carts };
    });
    
    if (delta > 0) {
      logAction(`📊 Added ${delta} ${item.title}`);
    } else {
      logAction(`📊 Removed ${Math.abs(delta)} ${item.title}`);
    }
  }

  function moveItem(fromUser, toUser, sku) {
    if (!toUser) return;
    
    const item = data.carts[fromUser].find((i) => i.sku === sku);
    const fromName = data.customers.find((c) => c.id === fromUser)?.name;
    const toName = data.customers.find((c) => c.id === toUser)?.name;
    
    console.log(`🔄 Moving ${item.title} from ${fromName}'s cart to ${toName}'s cart`);
    
    setData((d) => {
      const carts = { ...d.carts };
      carts[fromUser] = carts[fromUser].filter((i) => i.sku !== sku);
      carts[toUser] = [...carts[toUser], item];
      return { ...d, carts };
    });
    
    logAction(`🔄 Moved ${item.title} from ${fromName} to ${toName}`);
  }

  function addNewProduct() {
    const newSku = `product-${Date.now()}`;
    const newProduct = {
      sku: newSku,
      title: `New Product ${Math.floor(Math.random() * 100)}`,
      qty: 1,
      price: Math.floor(Math.random() * 50) + 10,
      image: "📦"
    };
    
    console.log(`🆕 Adding new product: ${newProduct.title} (SKU: ${newSku}, Price: $${newProduct.price})`);
    
    setData(d => ({
      ...d,
      carts: {
        ...d.carts,
        u1: [...d.carts.u1, newProduct]
      }
    }));
    
    logAction(`🆕 Added new product: ${newProduct.title}`);
  }

  function resetCarts() {
    console.log(`🔄 Resetting all carts to initial state`);
    setData(initial);
    logAction(`🔄 Reset all carts to initial state`);
  }

  const calculateTotal = (userId) => {
    return data.carts[userId].reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  return (
    <div className="space-y-6">
      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">🛒 Build It: Real-World Shopping Cart!</h4>
        <p className="text-sm text-purple-700">
          This is a complex, realistic app combining all the concepts you've learned. 
          Try changing quantities, moving items between carts, and adding new products!
          <br /><strong>📱 Every action is logged to the console with detailed information!</strong>
        </p>
      </div>
      
      <div className="flex gap-3 mb-4">
        <button 
          onClick={addNewProduct}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors duration-200"
        >
          🆕 Add New Product
        </button>
        <button 
          onClick={resetCarts}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
        >
          🔄 Reset Carts
        </button>
      </div>
      
      <div className="grid gap-6">
        {data.customers.map((c) => {
          const total = calculateTotal(c.id);
          return (
            <div key={c.id} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl border-2 border-blue-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{c.avatar}</div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{c.name}'s Cart</div>
                    <div className="text-sm text-slate-600">Customer ID: {c.id}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">${total.toFixed(2)}</div>
                  <div className="text-sm text-slate-600">Total</div>
                </div>
              </div>
              
              {data.carts[c.id].length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <div className="text-4xl mb-2">🛒</div>
                  <div>Cart is empty</div>
                </div>
              ) : (
                <div className="grid gap-4">
                  {data.carts[c.id].map((it) => (
                    <div key={it.sku} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{it.image}</div>
                          <div>
                            <div className="font-semibold text-lg text-slate-800">{it.title}</div>
                            <div className="text-sm text-slate-600">SKU: {it.sku}</div>
                            <div className="text-lg font-bold text-green-600">${it.price} each</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => changeQty(c.id, it.sku, -1)} 
                              className="w-10 h-10 border-2 border-red-300 rounded-full bg-red-50 text-red-700 hover:bg-red-100 transition-all duration-200 flex items-center justify-center font-bold text-lg hover:scale-110 transform"
                              disabled={it.qty <= 0}
                            >
                              -
                            </button>
                            <div className="w-12 text-center font-bold text-2xl text-slate-800">{it.qty}</div>
                            <button 
                              onClick={() => changeQty(c.id, it.sku, +1)} 
                              className="w-10 h-10 border-2 border-green-300 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-all duration-200 flex items-center justify-center font-bold text-lg hover:scale-110 transform"
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-xl font-bold text-slate-800">${(it.price * it.qty).toFixed(2)}</div>
                            <div className="text-sm text-slate-600">Subtotal</div>
                          </div>
                          
                          <select 
                            className="border-2 border-gray-300 rounded-xl p-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white" 
                            onChange={(e) => moveItem(c.id, e.target.value, it.sku)} 
                            value=""
                          >
                            <option value="">Move to...</option>
                            {data.customers.filter((x) => x.id !== c.id).map((x) => (
                              <option key={x.id} value={x.id}>
                                {x.name}'s cart
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
        <h5 className="font-semibold text-slate-800 mb-2">📝 Action Log (UI):</h5>
        <div className="font-mono text-xs bg-white rounded-xl p-3 h-24 overflow-auto border">
          {actionLog.length > 0 ? actionLog.join('\n') : 'No actions yet...'}
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-sm text-blue-700 border border-blue-200">
        🎓 <strong>What you're practicing:</strong> Complex nested state management, immutable updates, 
        and how components re-render when only part of the state changes. This is real React development!
        <br />📱 <strong>Console logs:</strong> See detailed information about every cart operation!
      </div>
    </div>
  );
}

// ---------------------- Parent / Child re-render demo ----------------------
function ParentChildRerenderDemo() {
  const [parentCount, setParentCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [renderLog, setRenderLog] = useState([]);

  const logRender = useCallback((component, reason) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${component}: ${reason}`;
    console.log(`🔄 ${logMessage}`);
    setRenderLog(prev => [logMessage, ...prev.slice(0, 14)]);
  }, []);

  useEffect(() => {
    logRender('Parent', 'Initial mount');
  }, [logRender]);

  useEffect(() => {
    logRender('Parent', `parentCount changed to ${parentCount}`);
  }, [parentCount, logRender]);

  function incrementParentCount() {
    console.log(`🔢 Incrementing parent count from ${parentCount} to ${parentCount + 1}`);
    setParentCount((c) => c + 1);
  }

  function addChild() {
    const newId = items.length + 1;
    console.log(`➕ Adding new child component with ID: ${newId}`);
    setItems((s) => [...s, newId]);
  }

  function removeChild() {
    if (items.length > 0) {
      const removedId = items[items.length - 1];
      console.log(`➖ Removing child component with ID: ${removedId}`);
      setItems((s) => s.slice(0, -1));
    }
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
        <h4 className="font-semibold text-indigo-800 mb-2">🧠 Understand: Re-render Optimization!</h4>
        <p className="text-sm text-indigo-700">
          Watch how parent state changes trigger re-renders. Notice which children re-render and why. 
          This is crucial for understanding React's rendering behavior!
          <br /><strong>📱 Every render and state change is logged to the console!</strong>
        </p>
      </div>
      
      <div className="flex gap-4">
        <button 
          onClick={incrementParentCount} 
          className="px-6 py-3 border-2 border-blue-300 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          🔢 Parent counter: {parentCount}
        </button>
        <button 
          onClick={addChild} 
          className="px-6 py-3 border-2 border-green-300 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          ➕ Add child
        </button>
        <button 
          onClick={removeChild} 
          className="px-6 py-3 border-2 border-red-300 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors duration-200 font-medium hover:scale-105 transform"
        >
          ➖ Remove child
        </button>
      </div>

      <div className="grid gap-4">
        {items.map((id) => (
          <Child key={id} id={id} parentCount={parentCount} onRender={logRender} />
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
        <h5 className="font-semibold text-slate-800 mb-2">🔄 Render Log (UI):</h5>
        <div className="font-mono text-xs bg-white rounded-xl p-3 h-32 overflow-auto border">
          {renderLog.length > 0 ? renderLog.join('\n') : 'No renders yet...'}
        </div>
      </div>

      <div className="p-4 bg-purple-50 rounded-2xl text-sm text-purple-700">
        🎯 <strong>Key insight:</strong> When parentCount changes, ALL children re-render because they receive it as a prop. 
        React.memo prevents unnecessary re-renders - try removing it to see the difference!
        <br />📱 <strong>Console logs:</strong> Watch the detailed render sequence and understand when components re-render!
      </div>
    </div>
  );
}

const Child = React.memo(function Child({ id, parentCount, onRender }) {
  // React.memo prevents re-render unless props change by shallow comparison
  useEffect(() => {
    onRender(`Child ${id}`, `parentCount: ${parentCount}`);
  }, [parentCount, id, onRender]);

  return (
    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold text-purple-800">Child {id}</div>
          <div className="text-sm text-purple-600">parentCount: <strong className="text-purple-700">{parentCount}</strong></div>
        </div>
        <div className="text-2xl">👶</div>
      </div>
    </div>
  );
});

function Footer() {
  return (
    <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl border-2 border-gray-200 text-sm text-slate-600">
      💻 <strong>You did it!</strong> You've built a complete React playground. 
      Keep experimenting, breaking things, and learning! ��
    </div>
  );
}