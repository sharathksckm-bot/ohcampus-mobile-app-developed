import React, { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { activityAPI, usersAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Activity,
  Search,
  User,
  Calendar,
  Filter,
  ChevronLeft,
  ChevronRight,
  LogIn,
  UserPlus,
  Edit,
  Trash2,
  Key,
  FileText,
  Target,
} from 'lucide-react';
import { toast } from 'sonner';

const ACTION_ICONS = {
  login: LogIn,
  create_admission: UserPlus,
  update_admission: Edit,
  delete_admission: Trash2,
  create_user: UserPlus,
  update_user: Edit,
  deactivate_user: Trash2,
  reset_password: Key,
  set_password: Key,
  update_profile: User,
  change_password: Key,
  create_target: Target,
  update_target: Edit,
  delete_target: Trash2,
};

const ACTION_COLORS = {
  login: 'bg-blue-100 text-blue-700',
  create_admission: 'bg-green-100 text-green-700',
  update_admission: 'bg-yellow-100 text-yellow-700',
  delete_admission: 'bg-red-100 text-red-700',
  create_user: 'bg-green-100 text-green-700',
  update_user: 'bg-yellow-100 text-yellow-700',
  deactivate_user: 'bg-red-100 text-red-700',
  reset_password: 'bg-purple-100 text-purple-700',
  set_password: 'bg-purple-100 text-purple-700',
  update_profile: 'bg-blue-100 text-blue-700',
  change_password: 'bg-purple-100 text-purple-700',
  create_target: 'bg-green-100 text-green-700',
  update_target: 'bg-yellow-100 text-yellow-700',
  delete_target: 'bg-red-100 text-red-700',
};

const formatAction = (action) => {
  return action.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default function ActivityLog() {
  const [logs, setLogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 20;
  
  // Filters
  const [filterUser, setFilterUser] = useState('all');
  const [filterAction, setFilterAction] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true);
      const params = {
        skip: (page - 1) * limit,
        limit,
      };
      if (filterUser !== 'all') params.user_id = filterUser;
      if (filterAction !== 'all') params.action = filterAction;
      
      const res = await activityAPI.getAll(params);
      setLogs(res.data.logs || []);
      setTotal(res.data.total || 0);
      setTotalPages(Math.ceil((res.data.total || 0) / limit));
    } catch (error) {
      toast.error('Failed to load activity logs');
    } finally {
      setLoading(false);
    }
  }, [page, filterUser, filterAction]);

  useEffect(() => {
    const init = async () => {
      try {
        const [actionsRes, usersRes] = await Promise.all([
          activityAPI.getActions(),
          usersAPI.getAll()
        ]);
        setActions(actionsRes.data || []);
        setUsers(usersRes.data || []);
      } catch {
        // Ignore errors for actions/users
      }
    };
    init();
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const filteredLogs = logs.filter(log => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      log.user_name?.toLowerCase().includes(query) ||
      log.user_email?.toLowerCase().includes(query) ||
      log.details?.toLowerCase().includes(query)
    );
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
            Activity Log
          </h1>
          <p className="text-[#475569] font-body mt-1">
            Track all user activities and system events
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">{total}</p>
                  <p className="text-xs text-[#475569] font-body">Total Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <LogIn className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {logs.filter(l => l.action === 'login').length}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Logins Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <User className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {new Set(logs.map(l => l.user_id)).size}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Active Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {logs.filter(l => l.action.includes('admission')).length}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Admissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
                <Input
                  placeholder="Search by user name, email, or details..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 font-body"
                  data-testid="activity-search"
                />
              </div>
              <Select value={filterUser} onValueChange={(v) => { setFilterUser(v); setPage(1); }}>
                <SelectTrigger className="w-full md:w-48 h-10" data-testid="user-filter">
                  <User className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Filter by User" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  {users.map(u => (
                    <SelectItem key={u.id} value={u.id}>{u.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterAction} onValueChange={(v) => { setFilterAction(v); setPage(1); }}>
                <SelectTrigger className="w-full md:w-48 h-10" data-testid="action-filter">
                  <Filter className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Filter by Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  {actions.map(a => (
                    <SelectItem key={a} value={a}>{formatAction(a)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Activity Table */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-[#0066CC]" />
              Activity History
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : filteredLogs.length === 0 ? (
              <div className="text-center py-12">
                <Activity className="h-12 w-12 mx-auto text-[#94A3B8] mb-4" />
                <p className="text-[#475569] font-body">No activity logs found</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-heading">Timestamp</TableHead>
                        <TableHead className="font-heading">User</TableHead>
                        <TableHead className="font-heading">Action</TableHead>
                        <TableHead className="font-heading">Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLogs.map(log => {
                        const IconComponent = ACTION_ICONS[log.action] || Activity;
                        return (
                          <TableRow key={log.id} data-testid={`activity-row-${log.id}`}>
                            <TableCell className="font-body text-[#475569] whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {formatDate(log.created_at)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-body font-medium">{log.user_name}</p>
                                <p className="text-xs text-[#94A3B8]">{log.user_email}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={`${ACTION_COLORS[log.action] || 'bg-gray-100 text-gray-700'} font-body`}>
                                <IconComponent className="h-3 w-3 mr-1" />
                                {formatAction(log.action)}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-body text-[#475569] max-w-[300px] truncate">
                              {log.details || '—'}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <p className="text-sm text-[#475569] font-body">
                      Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, total)} of {total} entries
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-body">
                        Page {page} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
