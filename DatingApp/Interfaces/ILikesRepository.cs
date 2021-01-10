﻿using DatingApp.DTOs;
using DatingApp.Entities;
using DatingApp.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserId, int likedUserId);
        Task<AppUser> GetUserWithLikes(int userId);
        Task<IEnumerable<LikeDto>> GetUserLikes(string predicate,int userId);
    }
}
