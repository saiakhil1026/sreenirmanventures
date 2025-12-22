import React, { useState } from 'react';
import { chatWithConcierge } from './services/geminiService';

const TestGeminiComponent: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTest = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError('');
    setResponse('');
    
    try {
      const result = await chatWithConcierge(input);
      setResponse(result);
    } catch (err) {
      setError('Failed to get response: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', border: '1px solid #ccc' }}>
      <h2>Gemini API Test Component</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message"
          style={{ width: '70%', padding: '8px' }}
        />
        <button 
          onClick={handleTest} 
          disabled={loading}
          style={{ marginLeft: '10px', padding: '8px 16px' }}
        >
          {loading ? 'Testing...' : 'Test'}
        </button>
      </div>
      
      {error && (
        <div style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px', marginBottom: '10px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {response && (
        <div style={{ backgroundColor: '#f0f8ff', padding: '10px', marginTop: '10px' }}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default TestGeminiComponent;