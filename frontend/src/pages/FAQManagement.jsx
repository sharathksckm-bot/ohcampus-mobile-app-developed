import React, { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { collegesAPI, faqsAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../components/ui/dialog';
import { Switch } from '../components/ui/switch';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Plus,
  Pencil,
  Trash2,
  HelpCircle,
  Globe,
  Building2,
  Loader2,
  Search,
} from 'lucide-react';
import { toast } from 'sonner';

export default function FAQManagement() {
  const [colleges, setColleges] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    is_global: true,
    college_id: '',
    order: 0,
  });

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [collegesRes, faqsRes] = await Promise.all([
        collegesAPI.getAll({}),
        faqsAPI.getAll({}),
      ]);
      setColleges(collegesRes.data);
      setFaqs(faqsRes.data);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const resetForm = () => {
    setFormData({
      question: '',
      answer: '',
      is_global: true,
      college_id: '',
      order: 0,
    });
    setEditingFaq(null);
  };

  const handleOpenDialog = (faq = null) => {
    if (faq) {
      setEditingFaq(faq);
      setFormData({
        question: faq.question,
        answer: faq.answer,
        is_global: faq.is_global,
        college_id: faq.college_id || '',
        order: faq.order || 0,
      });
    } else {
      resetForm();
    }
    setDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.question || !formData.answer) {
      toast.error('Please fill all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        question: formData.question,
        answer: formData.answer,
        is_global: formData.is_global,
        college_id: formData.is_global ? null : formData.college_id || null,
        order: parseInt(formData.order) || 0,
      };

      if (editingFaq) {
        await faqsAPI.update(editingFaq.id, payload);
        toast.success('FAQ updated successfully');
      } else {
        await faqsAPI.create(payload);
        toast.success('FAQ added successfully');
      }

      setDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save FAQ');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (faqId) => {
    if (!window.confirm('Are you sure you want to delete this FAQ?')) {
      return;
    }

    try {
      await faqsAPI.delete(faqId);
      toast.success('FAQ deleted successfully');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete FAQ');
    }
  };

  const getCollegeName = (collegeId) => {
    const college = colleges.find(c => c.id === collegeId);
    return college?.name || 'Unknown College';
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesFilter = filterType === 'all' || 
      (filterType === 'global' && faq.is_global) || 
      (filterType === 'college' && !faq.is_global);
    
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const globalFaqs = filteredFaqs.filter(faq => faq.is_global);
  const collegeFaqs = filteredFaqs.filter(faq => !faq.is_global);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
              FAQ Management
            </h1>
            <p className="text-[#475569] font-body mt-1">
              Create and manage frequently asked questions
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full"
                onClick={() => handleOpenDialog()}
                data-testid="add-faq-btn"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-heading">
                  {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
                </DialogTitle>
                <DialogDescription className="font-body">
                  {editingFaq ? 'Update the FAQ details below' : 'Create a new frequently asked question'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-body">Question *</Label>
                  <Input
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    placeholder="Enter the question"
                    className="font-body"
                    required
                    data-testid="faq-question-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-body">Answer *</Label>
                  <Textarea
                    value={formData.answer}
                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                    placeholder="Enter the answer"
                    className="font-body min-h-[120px]"
                    required
                    data-testid="faq-answer-input"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#0066CC]" />
                    <div>
                      <Label className="font-body font-medium">Global FAQ</Label>
                      <p className="text-sm text-[#475569] font-body">
                        Show on all college pages
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={formData.is_global}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_global: checked, college_id: '' })}
                    data-testid="faq-global-toggle"
                  />
                </div>

                {!formData.is_global && (
                  <div className="space-y-2 animate-fade-in">
                    <Label className="font-body">Assign to College</Label>
                    <Select
                      value={formData.college_id}
                      onValueChange={(value) => setFormData({ ...formData, college_id: value })}
                    >
                      <SelectTrigger data-testid="faq-college-select">
                        <SelectValue placeholder="Select a college" />
                      </SelectTrigger>
                      <SelectContent>
                        {colleges.map((college) => (
                          <SelectItem key={college.id} value={college.id}>
                            {college.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="font-body">Display Order</Label>
                  <Input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                    placeholder="0"
                    className="font-body w-24"
                    min="0"
                    data-testid="faq-order-input"
                  />
                  <p className="text-xs text-[#475569] font-body">
                    Lower numbers appear first
                  </p>
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                    className="font-body"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body"
                    data-testid="save-faq-btn"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : editingFaq ? (
                      'Update FAQ'
                    ) : (
                      'Add FAQ'
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 font-body"
                  data-testid="faq-search-input"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full sm:w-48 font-body" data-testid="faq-filter-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All FAQs</SelectItem>
                  <SelectItem value="global">Global FAQs</SelectItem>
                  <SelectItem value="college">College-specific</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* FAQs List */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        ) : filteredFaqs.length === 0 ? (
          <Card className="p-12 text-center">
            <HelpCircle className="h-16 w-16 mx-auto text-[#94A3B8] mb-4" />
            <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
              No FAQs Found
            </h3>
            <p className="text-[#475569] font-body mb-4">
              {searchQuery ? 'No FAQs match your search.' : 'Create your first FAQ to get started.'}
            </p>
            <Button
              onClick={() => handleOpenDialog()}
              className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add FAQ
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Global FAQs */}
            {(filterType === 'all' || filterType === 'global') && globalFaqs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                    <Globe className="h-5 w-5 text-[#0066CC]" />
                    Global FAQs
                    <Badge variant="secondary" className="ml-2">{globalFaqs.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {globalFaqs.map((faq, index) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border-slate-200">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left flex-1 mr-4">
                            <span className="text-[#0066CC] font-semibold font-body">{index + 1}.</span>
                            <span className="font-body font-medium text-[#0F172A]">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-8 pb-2">
                            <p className="font-body text-[#475569] mb-4">{faq.answer}</p>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleOpenDialog(faq)}
                                className="font-body"
                                data-testid={`edit-faq-${faq.id}`}
                              >
                                <Pencil className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDelete(faq.id)}
                                className="font-body text-red-600 hover:text-red-700 hover:bg-red-50"
                                data-testid={`delete-faq-${faq.id}`}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}

            {/* College-specific FAQs */}
            {(filterType === 'all' || filterType === 'college') && collegeFaqs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#FF6B35]" />
                    College-specific FAQs
                    <Badge variant="secondary" className="ml-2">{collegeFaqs.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {collegeFaqs.map((faq, index) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border-slate-200">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left flex-1 mr-4">
                            <span className="text-[#FF6B35] font-semibold font-body">{index + 1}.</span>
                            <div>
                              <span className="font-body font-medium text-[#0F172A] block">{faq.question}</span>
                              <span className="text-xs text-[#475569] font-body">
                                {getCollegeName(faq.college_id)}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-8 pb-2">
                            <p className="font-body text-[#475569] mb-4">{faq.answer}</p>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleOpenDialog(faq)}
                                className="font-body"
                                data-testid={`edit-faq-${faq.id}`}
                              >
                                <Pencil className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDelete(faq.id)}
                                className="font-body text-red-600 hover:text-red-700 hover:bg-red-50"
                                data-testid={`delete-faq-${faq.id}`}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
