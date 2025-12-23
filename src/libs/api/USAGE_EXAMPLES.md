# API Setup Usage Examples

This document shows how to use the API setup, query keys, and mutations in your components.

## Table of Contents

1. [Using Query Keys](#using-query-keys)
2. [Using Mutations](#using-mutations)
3. [Creating Custom Hooks](#creating-custom-hooks)
4. [Using Services](#using-services)

---

## Using Query Keys

### Example: Fetching Schools

```typescript
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constants';
import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';

const SchoolsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: queryKeys.schools.list(),
    queryFn: async () => {
      const response = await axiosInstance.get(API_ENDPOINTS.SCHOOLS);
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading schools</div>;

  return (
    <div>
      {data?.data?.map((school) => (
        <div key={school.id}>{school.schoolName}</div>
      ))}
    </div>
  );
};
```

### Example: Fetching Single School

```typescript
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constants';
import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';

const SchoolDetails = ({ schoolId }: { schoolId: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.schools.detail(schoolId),
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_ENDPOINTS.SCHOOLS}/${schoolId}`);
      return response.data;
    },
    enabled: !!schoolId, // Only fetch if schoolId exists
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>{data?.data?.schoolName}</div>;
};
```

---

## Using Mutations

### Example: Registration Mutation

```typescript
import { useRegister } from '@/hooks/useAuth';

const RegistrationForm = () => {
  const registerMutation = useRegister();

  const handleSubmit = (data: RegistrationRequest) => {
    registerMutation.mutate({
      name: data.studentName,
      email: data.email,
      classGrade: data.classGrade,
      phone: data.phoneNumber,
      schoolName: data.schoolName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button 
        type="submit" 
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};
```

### Example: Login Mutation

```typescript
import { useLogin } from '@/hooks/useAuth';

const LoginForm = () => {
  const loginMutation = useLogin();

  const handleSubmit = (data: LoginRequest) => {
    loginMutation.mutate({
      email: data.email,
      phone: data.phone,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button 
        type="submit" 
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
```

### Example: Custom Mutation with Query Invalidation

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationKeys, queryKeys } from '@/constants';
import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';

const CreateSchoolForm = () => {
  const queryClient = useQueryClient();

  const createSchoolMutation = useMutation({
    mutationKey: mutationKeys.schools.create,
    mutationFn: async (data: { schoolName: string; schoolCode: string }) => {
      const response = await axiosInstance.post(API_ENDPOINTS.SCHOOLS, data);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch schools list
      queryClient.invalidateQueries({ queryKey: queryKeys.schools.lists() });
      toast.success('School created successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const handleSubmit = (data: any) => {
    createSchoolMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button 
        type="submit" 
        disabled={createSchoolMutation.isPending}
      >
        {createSchoolMutation.isPending ? 'Creating...' : 'Create School'}
      </button>
    </form>
  );
};
```

---

## Creating Custom Hooks

### Example: Custom Hook for Schools

```typescript
// src/hooks/useSchools.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys, mutationKeys } from '@/constants';
import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/api';

export const useSchools = () => {
  return useQuery({
    queryKey: queryKeys.schools.list(),
    queryFn: async () => {
      const response = await axiosInstance.get(API_ENDPOINTS.SCHOOLS);
      return response.data;
    },
  });
};

export const useSchool = (schoolId: string) => {
  return useQuery({
    queryKey: queryKeys.schools.detail(schoolId),
    queryFn: async () => {
      const response = await axiosInstance.get(`${API_ENDPOINTS.SCHOOLS}/${schoolId}`);
      return response.data;
    },
    enabled: !!schoolId,
  });
};

export const useCreateSchool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: mutationKeys.schools.create,
    mutationFn: async (data: { schoolName: string; schoolCode: string }) => {
      const response = await axiosInstance.post(API_ENDPOINTS.SCHOOLS, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.schools.lists() });
      toast.success('School created successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
```

### Usage in Component

```typescript
import { useSchools, useCreateSchool } from '@/hooks/useSchools';

const SchoolsPage = () => {
  const { data: schools, isLoading } = useSchools();
  const createSchool = useCreateSchool();

  const handleCreate = () => {
    createSchool.mutate({
      schoolName: 'New School',
      schoolCode: 'NS001',
    });
  };

  return (
    <div>
      <button onClick={handleCreate}>Create School</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        schools?.data?.map((school) => (
          <div key={school.id}>{school.schoolName}</div>
        ))
      )}
    </div>
  );
};
```

---

## Using Services

### Example: Direct Service Usage

```typescript
import { authService } from '@/services/auth.service';

// In a component or utility function
const handleLogin = async (email: string, phone: string) => {
  try {
    const response = await authService.login({ email, phone });
    if (response.success) {
      localStorage.setItem('authToken', response.data.token);
      // Handle success
    }
  } catch (error) {
    // Handle error
  }
};
```

---

## Best Practices

1. **Always use query keys from constants**: Don't use string literals directly
   ```typescript
   // ✅ Good
   queryKey: queryKeys.schools.list()
   
   // ❌ Bad
   queryKey: ['schools', 'list']
   ```

2. **Use mutation keys for mutations**: Keep consistency
   ```typescript
   // ✅ Good
   mutationKey: mutationKeys.schools.create
   
   // ❌ Bad
   mutationKey: ['create_school']
   ```

3. **Invalidate related queries after mutations**: Keep data fresh
   ```typescript
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: queryKeys.schools.lists() });
   }
   ```

4. **Use enabled option for conditional queries**: Avoid unnecessary requests
   ```typescript
   enabled: !!schoolId && !!userId
   ```

5. **Handle errors consistently**: Use toast notifications
   ```typescript
   onError: (error) => {
     toast.error(getErrorMessage(error));
   }
   ```

---

## Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

For production:

```env
VITE_API_BASE_URL=https://your-api-domain.com/api
```

