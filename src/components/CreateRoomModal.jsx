import { useState } from 'react';

function CreateRoomModal({ isOpen, onClose, onSubmit }) {
  const [roomData, setRoomData] = useState({
    chips: 1000,
    minBuyIn: 100,
    blinds: 1,
    password: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h3 className="text-lg font-medium mb-4">创建新房间</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">初始筹码数量</label>
            <input
              type="number"
              min="1000"
              max="10000"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={roomData.chips}
              onChange={(e) => setRoomData({...roomData, chips: parseInt(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">最小带入</label>
            <input
              type="number"
              min="100"
              max="1000"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={roomData.minBuyIn}
              onChange={(e) => setRoomData({...roomData, minBuyIn: parseInt(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">底注</label>
            <input
              type="number"
              min="1"
              max="10"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={roomData.blinds}
              onChange={(e) => setRoomData({...roomData, blinds: parseInt(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">房间密码（可选）</label>
            <input
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={roomData.password}
              onChange={(e) => setRoomData({...roomData, password: e.target.value})}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            取消
          </button>
          <button
            onClick={() => onSubmit(roomData)}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            创建
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRoomModal; 