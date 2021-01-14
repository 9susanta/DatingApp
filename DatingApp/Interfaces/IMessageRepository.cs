using DatingApp.DTOs;
using DatingApp.Entities;
using DatingApp.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void DeleteMessage(Message message);
        Task<Message> GetMessage(int id);
        Task<PagedList<MessageDto>> GetMessagesForUser();
        Task<IEnumerable<MessageDto>> GetMessageThread(string currentUserId, string recipientUserId);
        Task<bool> SaveAllAsync();
    }
}
