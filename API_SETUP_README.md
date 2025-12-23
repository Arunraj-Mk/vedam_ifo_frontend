# API Setup Documentation

This document describes the complete API setup including interceptors, React Query configuration, and query/mutation keys.

## 📁 File Structure

```
src/
├── libs/
│   └── api/
│       ├── config.ts          # API configuration (base URL, endpoints)
│       ├── axios.ts            # Axios instance with interceptors
│       ├── index.ts            # API exports
│       └── USAGE_EXAMPLES.md   # Usage examples
├── constants/
│   ├── queryKeys.ts           # React Query query keys
│   ├── mutationKeys.ts        # React Query mutation keys
│   └── index.ts               # Constants exports
├── interceptors/
│   └── index.ts               # Interceptor initialization
├── services/
│   ├── auth.service.ts        # Authentication service
│   └── index.ts               # Services exports
├── hooks/
│   └── useAuth.ts             # Authentication hooks
└── utils/
    └── api.ts                 # API utility functions
```

## ✅ What's Been Set Up

### 1. **Axios Instance with Interceptors** ✅
- ✅ Request interceptor: Automatically adds auth token to headers
- ✅ Response interceptor: Handles errors globally, redirects on 401
- ✅ Error handling: Toast notifications for errors
- ✅ Base URL configuration: Environment-based

### 2. **React Query Configuration** ✅
- ✅ QueryClient setup in `main.tsx`
- ✅ React Query DevTools (development only)
- ✅ Default query options (staleTime, refetchOnWindowFocus)
- ✅ Default mutation options (retry: 0)

### 3. **Query Keys** ✅
- ✅ Centralized query keys in `constants/queryKeys.ts`
- ✅ Factory pattern for consistent key generation
- ✅ Type-safe query keys
- ✅ Hierarchical structure (all → lists → detail)

### 4. **Mutation Keys** ✅
- ✅ Centralized mutation keys in `constants/mutationKeys.ts`
- ✅ Factory pattern for consistent key generation
- ✅ Type-safe mutation keys

### 5. **Services** ✅
- ✅ Authentication service (`auth.service.ts`)
- ✅ Reusable service pattern
- ✅ TypeScript types for requests/responses

### 6. **Custom Hooks** ✅
- ✅ `useAuth` hooks (login, register, logout, currentUser)
- ✅ Automatic query invalidation
- ✅ Error handling with toast notifications

## 🚀 Quick Start

### 1. Environment Setup

Create `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### 2. Using Query Keys

```typescript
import { queryKeys } from '@/constants';
import { useQuery } from '@tanstack/react-query';

// ✅ Use query keys from constants
const { data } = useQuery({
  queryKey: queryKeys.schools.list(),
  queryFn: fetchSchools,
});
```

### 3. Using Mutations

```typescript
import { mutationKeys } from '@/constants';
import { useMutation } from '@tanstack/react-query';

// ✅ Use mutation keys from constants
const mutation = useMutation({
  mutationKey: mutationKeys.schools.create,
  mutationFn: createSchool,
});
```

### 4. Using Auth Hooks

```typescript
import { useLogin, useRegister } from '@/hooks/useAuth';

const LoginForm = () => {
  const loginMutation = useLogin();
  
  const handleSubmit = (data) => {
    loginMutation.mutate(data);
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
};
```

## 📚 Available Query Keys

```typescript
// Authentication
queryKeys.auth.user()

// Students
queryKeys.students.list()
queryKeys.students.detail(id)
queryKeys.students.bulkUpload()

// Schools
queryKeys.schools.list()
queryKeys.schools.detail(id)
queryKeys.schools.byName(name)

// Tests
queryKeys.tests.list()
queryKeys.tests.detail(id)
queryKeys.tests.questions(testId)
queryKeys.tests.attempts(studentId)
queryKeys.tests.results(attemptId)

// Reports
queryKeys.reports.performanceSummary()
queryKeys.reports.studentPerformance(studentId)

// Payments
queryKeys.payments.status(studentId)

// Bulk Payments
queryKeys.bulkPayments.status(paymentId)
queryKeys.bulkPayments.history(schoolId)
```

## 🔑 Available Mutation Keys

```typescript
// Authentication
mutationKeys.auth.login
mutationKeys.auth.registration
mutationKeys.auth.logout

// Students
mutationKeys.students.create
mutationKeys.students.update(id)
mutationKeys.students.delete(id)
mutationKeys.students.bulkUpload

// Schools
mutationKeys.schools.create
mutationKeys.schools.update(id)
mutationKeys.schools.delete(id)

// Tests
mutationKeys.tests.create
mutationKeys.tests.start
mutationKeys.tests.submit(attemptId)
mutationKeys.tests.submitAnswer(attemptId)

// Payments
mutationKeys.payments.updateStatus(studentId)

// Bulk Payments
mutationKeys.bulkPayments.initiate
mutationKeys.bulkPayments.process(paymentId)
```

## 🔧 API Configuration

### Base URL
Configured in `src/libs/api/config.ts`:
- Development: `http://localhost:8080/api`
- Production: Set via `VITE_API_BASE_URL` environment variable

### Endpoints
All endpoints are defined in `API_ENDPOINTS` constant:
```typescript
import { API_ENDPOINTS } from '@/libs/api/config';

// Use endpoints like this:
axiosInstance.get(API_ENDPOINTS.SCHOOLS);
```

## 🛡️ Interceptors

### Request Interceptor
- Automatically adds `Authorization: Bearer <token>` header
- Token retrieved from `localStorage.getItem('authToken')`

### Response Interceptor
- Handles 401: Clears auth, redirects to login
- Handles 403: Shows forbidden message
- Handles 404: Shows not found message
- Handles 409: Shows conflict message
- Handles 500+: Shows server error message
- All errors show toast notifications

## 📖 Examples

See `src/libs/api/USAGE_EXAMPLES.md` for detailed examples:
- Using query keys
- Using mutations
- Creating custom hooks
- Using services directly

## 🎯 Best Practices

1. **Always use query/mutation keys from constants**
   ```typescript
   // ✅ Good
   queryKey: queryKeys.schools.list()
   
   // ❌ Bad
   queryKey: ['schools', 'list']
   ```

2. **Invalidate queries after mutations**
   ```typescript
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: queryKeys.schools.lists() });
   }
   ```

3. **Use enabled for conditional queries**
   ```typescript
   enabled: !!schoolId
   ```

4. **Handle errors consistently**
   ```typescript
   onError: (error) => {
     toast.error(getErrorMessage(error));
   }
   ```

## 🔍 Debugging

### React Query DevTools
- Available in development mode
- Access via browser extension or built-in devtools
- Shows query cache, mutations, and network requests

### Check Network Tab
- All requests include Authorization header (if logged in)
- Check response status codes
- Verify request/response payloads

## 🚨 Troubleshooting

### CORS Issues
- Ensure backend has CORS enabled
- Check `VITE_API_BASE_URL` matches backend URL

### 401 Errors
- Check if token exists in localStorage
- Verify token hasn't expired
- Check interceptor is adding token correctly

### Query Not Refetching
- Check query key matches exactly
- Verify `invalidateQueries` is called
- Check `staleTime` configuration

## 📝 Next Steps

1. Create additional services for other endpoints
2. Create custom hooks for each service
3. Add error boundaries for better error handling
4. Implement token refresh logic if needed
5. Add request/response logging in development

## 📚 Related Documentation

- [Backend API Documentation](../test_backend/AUTH_API_DOCUMENTATION.md)
- [Frontend Integration Guide](../test_backend/FRONTEND_INTEGRATION_GUIDE.md)
- [Usage Examples](./src/libs/api/USAGE_EXAMPLES.md)

